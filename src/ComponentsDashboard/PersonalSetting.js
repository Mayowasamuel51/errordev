import { useState } from "react";
import { Form } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
function PersonalSetting() {
    // developername , portfollo website, programming feild frontend or backend ;
    const notyf = new Notyf();
    const getemail = localStorage.getItem('email')
    const [email, setEamil] = useState(getemail);
    const [token, setToken] = useState('');
    const gettoken = localStorage.getItem('token')
    const handlechange = (e) => {
        setEamil(e.target.value)
    }
    const handletoken = (e) => {
        setToken(e.target.value)
    }
    return (
        <>
            <Form method="POST">
                {/* <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input onChange={handlechange} className="input" required type="text" value={email} placeholder="Text input" />
                    </div>
                </div> */}

                <div className="field">
                    <label className="label is-size-2 ">  Add Portfoilo website</label>
                    <p className="has-text-weight-bold">add your Portfolio so to get jobs and recommendation</p>
                    <div className="control">
                        <input className="input" type="url" required
                            name="portfollio"
                            placeholder="add your Portfoilo website " />
                    </div>
                </div>


                <button className="button is-primary" type="submit">submit </button>
            </Form>


        </>
    )
}
export async function addSetting({ request }) {
    const notyf = new Notyf();
    const data = await request.formData();
    const getemail = localStorage.getItem('email')
    const authData = {
        portfollio: data.get('portfollio'),
        developername:getemail
    }

    const response = await fetch('http://localhost:8000/api/portfollio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    })

    if (response.status === 422 || response.status === 401) {
        console.log('error found ')
        return response;
    }
    if (!response.ok) {
        throw new Response(JSON.stringify({
            massage: 'Cant create a User'
        }), { status: 500 });
    }

    const resData = await response.json();
    notyf.success('Setting updated');
    return resData.data

 }


export default PersonalSetting;