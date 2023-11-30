import { Link, Outlet } from "react-router-dom";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Pagination } from "react-bootstrap";
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import { fireEvent } from "@testing-library/react";
function StoreFix({ storerrorfix }) {
    const [currentpage, setCurrentpage] = useState(1)
    const recordPerpage = 4;
    const lastindex = currentpage * recordPerpage;
    const firstindex = lastindex - recordPerpage;
    const records = storerrorfix.slice(firstindex, lastindex)
    const npage = Math.ceil(storerrorfix.length / recordPerpage);
    const number = [...Array(npage + 1).keys()].slice(1)

    function nextPage() {
        if (currentpage !== lastindex) {
            setCurrentpage(currentpage + 1)
        }
    }

    function prePage() {
        if (currentpage !== 1) {
            setCurrentpage(currentpage - 1)
        }
    }

    function changecpage(id) {
        setCurrentpage(id)
    }
    return (
        <>
            <Card>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                           
                            <th>Error Name</th>
                            <th>Date Added</th>
                            <th>Veiw Solutons</th>
                        </tr>
                    </thead>
                    {records.map((item, index) => {
                        return (
                            <tbody key={item._id} >
                                <tr className="mt-1">
                                    {/* <td>{index}</td> */}
                                    <td>{item.errorname}</td>
                                    <td>{moment(item.createdAt)
                                        .utc()
                                        .format("YYYY-MM-DD")
                                    }</td>
                                    <td>
                                        <Link
                                            to={`/dashboard/${item._id}`}
                                            className="button is-info btn-sm px-3 py-1 rounded-0"
                                        >
                                            view
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>
                        )
                    })}



                </Table>
                <nav className="pagination" role="navigation" aria-label="pagination">
                    <ul className="pagination m-4">
                        <li>
                            <a herf="#" className="pagination-previous" onClick={prePage}> prev</a>
                        </li>
                        {
                            number.map((n, i) => {
                                <li className={`pagination-link ${currentpage === n ? `pagination` : ''}`}>
                                    <a herf="#"
                                        className="pagination-linl"
                                        onClick={() => changecpage(n)} >{n}</a>
                                </li>
                            })
                        }


                        <li>
                            <a herf="#" className="pagination-next" onClick={nextPage}> next</a>
                        </li>
                    </ul>
                </nav>
            </Card>
        </>
    )
}



export default StoreFix;