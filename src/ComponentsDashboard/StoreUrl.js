import { Form, Outlet } from "react-router-dom";
import UrlStroage from "../components/UrlStroage";
import { useState } from "react";
function StoreUrl() {
    // developername, // this is the same as the user gmail
    // websiteurl,
    // user_id, // this is the same as the user gmail
    // about
    const [email, setEmail] = useState('');
    const getemail = localStorage.getItem('email')
    // setEmail(getemail)
    return (
        <>
            <div className="container ">
                <h1 className="mt-3 has-text-weight-bold is-size-2">Store any website url </h1>
                <Form method="post">
                    <div className="field">
                        <label className="label">Website Name</label>
                        <div className="control">
                            <input className="input is-small" type="text" name="webname" placeholder="Text input" />
                        </div>
                    </div>

{/* 
                    <div className="field">
                        <label className="label">User id</label>
                        <div className="control">
                            <input className="input is-small" type="text" name={email} placeholder="Text input" />
                        </div>
                    </div> */}


                    {/* <div className="field">
                        <label className="label">Developer Name</label>
                        <div className="control">
                            <input className="input is-small" type="text" name={email} placeholder="Text input" />
                        </div>
                    </div>
 */}

                    <div className="field">
                        <label className="label">Website Url</label>
                        <div className="control">
                            <input className="input is-small" type="url" name="websiteurl" placeholder="Text input" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">(Optional) </label>
                        <div className="control">
                            <textarea className="textarea" name="about"></textarea>
                        </div>
                    </div>

                    <input type="submit" className="button is-dark" />
                </Form>
            </div>
            <UrlStroage />
        </>
    )
}
export async function formurl({ request, params }) {
    const data = await request.formData();
    const userGmail = localStorage.getItem('email');
    const authData = {
        webname: data.get('webname'),
        about: data.get('about'),
        websiteurl: data.get('websiteurl'),
        developername: userGmail
    }

    const response = await fetch('http://localhost:8000/api/websiteurlinfo', {
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
    return resData.data_url

}

export default StoreUrl;