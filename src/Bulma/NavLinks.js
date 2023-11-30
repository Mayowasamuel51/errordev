import { Link, Outlet } from "react-router-dom";


function NavLinks() {
    return (
        <>

            <div className="columns is-mobile is-centered " style={{ padding: '20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <div className="field is-grouped is-grouped-multiline">

                    {/* <div className="control">
                        <Link className="tag is-info is-medium has-text-weight-bold" to="questions">Ask a Question</Link></div> */}
                     {/* <div className="control">
                        <Link className="tag is-info is-medium has-text-weight-bold" to="/dashboard/websiteurl">Password Manager</Link></div> */}
                    
                    <div className="control">
                        <Link className="tag is-info is-medium has-text-weight-bold" to="/dashboard/websiteurl">Keep  webite Url</Link></div>
                    <div className="control">
                        <Link className="tag is-info is-medium has-text-weight-bold"
                        to="errorfix">Store Error Fix</Link></div>

                    {/* <div className="control"><Link className="tag is-info is-medium has-text-weight-bold"
                        to="portfolio">Store Portfolio webite </Link></div> */}

                    <div className="control">
                        <Link className="tag is-info is-medium has-text-weight-bold"
                        to="settings">Portfoilo </Link></div>
                </div>

                {/* <Outlet /> */}
            </div>
        </>
    )
}

export default NavLinks;