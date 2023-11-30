import { useLoaderData, useParams } from "react-router-dom";
import NetWorkError from "../components/NetWorkError";
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';




function ViewSoluition() {
    const viewerrorfix = useLoaderData();
    const { id } = useParams()
    const user_id = id;
    console.log(viewerrorfix)
    const newarr = [];
    newarr.push(viewerrorfix)
    return (

        <>

            <ListVeiw view={newarr} />
          
        </>
    )
}

function ListVeiw({ view }) {
    return (
        <>
            <div className="box">
                <div className="media">
                    {view.map((item, index) => {
                        return (
                            <div key={item._id}>
                                <h2 className="pb-4">Error Name <span>{item.errorname
                                }</span></h2>
                                <div>
                                    <img src={`http://localhost:8000/errorfix/${item.errorfixImage.data}`} height="300" width="500" />

                                    <div className="media-content mt-3">
                                        <div className="content">
                                            <p>
                                                <strong>
                                                    {item.errorcode}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        )
                    })}
                </div>
            </div>

        </>
    )
}

export async function loadererrorfixid({ params }) {
    const user_id = params.id
    // this will load  the errorfix  info from the backend   
    const useremail = localStorage.getItem('email')
    const response = await fetch(`http://localhost:8000/api/errorfixid/${user_id}`);
    if (!response.ok) {
        return <NetWorkError />
    }
    const res = await response.json();
    return res.data;

}

export default ViewSoluition;