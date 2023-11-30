import { Await, Form, Outlet, defer, useLoaderData } from "react-router-dom";
import UrlStroage from "../components/UrlStroage";
import { Suspense, useState } from "react";
import NetWorkError from "../components/NetWorkError";
import { Notyf } from 'notyf';
import Button from 'react-bootstrap/Button';
import 'notyf/notyf.min.css'; 
import AppF from "../Firbase";
function StoreUrl() {   
    const websiteurl = useLoaderData()
    const newarr = [];
    newarr.push(websiteurl)
    return (
        <>
            <div className="container ">
                <h1 className="mt-3 has-text-weight-bold is-size-2 has-text-centered">Store any website url </h1>
                <Form method="post" style={{ margin: 'auto', width: '100%' }}>
                    <div className="field">
                        <label className="label">Website Name</label>
                        <div className="control">
                            <input className="input is-medium" type="text" required name="webname" placeholder="website name" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Website Url</label>
                        <div className="control">
                            <input className="input is-medium" type="url" required name="websiteurl" placeholder="website url" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">(Optional) </label>
                        <div className="control">
                            <textarea className="textarea" required name="about" placeholder="about the website "></textarea>
                        </div>
                    </div>

                    {/* <input type="submit" className="button is-dark" /> */}
                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </div>
            <hr />
          

        
            <Suspense fallback={<p>LOADING THIS</p>}>
                <Await resolve={(websiteurl)}>
                {productEve =>  <UrlStroage websiteurl={productEve} />}
                </Await>
                </Suspense>
    

        

        </>
    )
}
export async function formurl({ request, params }) {
    const notyf = new Notyf();
    const data = await request.formData();
    const userGmail = localStorage.getItem('email');
    const authData = {
        webname: data.get('webname'),
        about: data.get('about'),
        websiteurl: data.get('websiteurl'),
        developername: userGmail
    }
    // am susppose to get it through email 
    const useremail = localStorage.getItem('email')
    const response = await fetch(`https://errordevbackendapi.vercel.app/api/websiteurlinfo`, {
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
    notyf.success('Website url added');
    return resData.data_url

}

// not need to export this ... come back to this  later 
export async function loaduriwebsite({ params }) {
    // this will load  the website url  info from the backend   
    const useremail = localStorage.getItem('email')
    const response = await fetch(`http://localhost:8000/api/websiteurlinfo/${useremail}`);
    if (!response.ok) {
        return <NetWorkError />
    }
    const res = await response.json();
    return res.data;

}

export async function getloaderurlwebiste() {
    return defer({
        websiteurl: await loaduriwebsite()
    })
}
export default StoreUrl;