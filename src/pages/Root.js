import {  Outlet, useNavigation } from "react-router-dom";
import Home from "./Home";
import Nav from "../Bulma/Nav";


function Root() {
    const navgiation = useNavigation()
    return (
        <>
            <Nav/>
         
            
            <main>
                {/* {navgiation.state === 'loading'  &&   <h1 className="text-info text-center">LOADING.............</h1>} */}
                {/* <Outlet /> */}
                <Home/>
           </main>

        </>
    )
}

export default Root;