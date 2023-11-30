import { Form } from "react-router-dom";
import AppF from "../Firbase";


function Portfoilo() {
    return ( 
        <>
        
            <Form method="post"> 
                <div className="container   ">
                    <div style={{ margin:'auto', width:'50%'}}>
                        <h2 className="has-text-weight-bold">Submit your Portfolio so to get jobs and recommendation</h2>
                        <div className="mt-3">
                            <input type="text" name="portfolio" className="input" placeholder="Submit your Portfolio so to get jobs and recommendation"/>
                        </div>
                        <button className="button  is-dark mt-5">submit portfolio</button>
                    </div> 
                </div>

            </Form>
        
        
        </>
    )
}



export default Portfoilo;