import { Await, Form, Link, Outlet, defer, useLoaderData } from "react-router-dom";
import UrlStroage from "../components/UrlStroage";
import { Suspense, useState } from "react";
import NetWorkError from "../components/NetWorkError";
import { Notyf } from 'notyf';
import Button from 'react-bootstrap/Button';
import 'notyf/notyf.min.css'; 
import axios from "axios";
import AppF from "../Firbase";
import StoreFix from "../components/StoreFix";
function StoreErrorFix() {   
    const storerrorfix = useLoaderData()
    const notyf = new Notyf();
    const [selected, setSelected] = useState(null)
    const [input, setInput] = useState('')
    const [error, seterror] = useState('')
    const handleInputFile = (e) => {
        setSelected(e.target.files[0])
    }
    const handlechange =(e) => {
        setInput(e.target.value)
    }
    const handlechangeerror =(e) => {
        seterror(e.target.value)
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        const getemail = localStorage.getItem('email')
        const form = new FormData()
        form.append('developeremail',getemail)
        form.append('errorname', input)
        form.append('errorcode', error)
        form.append('errorfixImage', selected)
        axios.post('http://localhost:8000/api/errorfix', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
            }).then((res) => {
            if (res.data.status === 201) {
                notyf.success('errorfix added ')
            } else if (res.status === 404) {
                notyf.error(res.data.dataMessage)
            }
        }).catch((err)=>alert(err.message))
    }
    const newarr = [];
    newarr.push(storerrorfix)
    console.log(storerrorfix)
    return (
        <>
          
            <div className="container ">
                <h1 className="mt-3 has-text-weight-bold is-size-2 has-text-centered">Store the  error your Fixed  </h1>
                <form onSubmit={formSubmit} method="post" >
                    <div className="field">
                        <label className="label">Name of Error</label>
                        <div className="control">
                            <input className="input is-medium" type="text" value={input} onChange={handlechange} name="errorname" placeholder="Error name " />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Code to the solution</label>
                        <p>store the error code </p>
                        <div className="control">
                            <textarea className="textarea is-medium" type="text" value={error} onChange={handlechangeerror} name="errorcode" placeholder="code to the solution " ></textarea>
                        </div>
                    </div>
                  
                    <div className="field">
                        <label className="label">Screenshot the Error (Optional)</label>
                        <div className="control">
                            <div className="file is-boxed">
                                <label className="file-label">
                                    <input className="file-input" name="errorfixImage" onChange={handleInputFile} type="file" required />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Choose a file…
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* <button type="submit" className="button is-dark" >Store Error</button> */}
                    <Button variant="dark" type="submit">Store Error</Button>
                </form>
            </div>
            <hr />
          
            <Suspense fallback={<p className="is-size-1 ">LOADING THIS</p>}>
                <Await resolve={(storerrorfix)}>
                    {productEve =>
                        <StoreFix storerrorfix={productEve} />
                    }
                </Await>
            </Suspense> 
        </>
    )
}

// not need to export this ... come back to this  later 
export async function loadererrorfix({ params }) {
    // this will load  the errorfix  info from the backend   
    const useremail = localStorage.getItem('email')
    const response = await fetch(`http://localhost:8000/api/errorfix/${useremail}`);
    if (!response.ok) {
        return <NetWorkError />
    }
    const res = await response.json();
    return res.data;

}


export default StoreErrorFix;