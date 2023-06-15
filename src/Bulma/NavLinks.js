import { Link, Outlet } from "react-router-dom";


function NavLinks() {
    return (
        <>
        
            <div className="columns is-mobile is-centered mt-4" style={{ padding: '20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                <div className="field is-grouped is-grouped-multiline">
                    <div className="control"><Link className="tag is-info is-medium has-text-weight-bold" to="/errorscreenshot">Store  error ScreenShot</Link></div>
                    <div className="control"><Link className="tag is-info is-medium has-text-weight-bold" to="questions">Ask a Question</Link></div>
                    <div className="control"><Link className="tag is-info is-medium has-text-weight-bold" to="websiteurl">Keep  webite Url</Link></div>
                    <div className="control"><Link className="tag is-info is-medium has-text-weight-bold"
                        to="/errorfix">Store Error Fix</Link></div>
                </div>

            </div>
        </>
    )
}

export default NavLinks;