import { Suspense, useState } from "react";
import { Card } from "react-bootstrap";
import { Await } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function UrlStroage({ websiteurl }) {
    const [currentpage, setCurrentpage] = useState(1)
    const recordPerpage = 4;
    const lastindex = currentpage * recordPerpage;
    const firstindex = lastindex - recordPerpage;
    const records = websiteurl.slice(firstindex, lastindex)
    const npage = Math.ceil(websiteurl.length / recordPerpage);
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
                <Table striped bordered hover style={{ margin: 'auto', width: '80%' }}>
                    <thead>
                        <tr>
                            <th>Website Name</th>
                            <th>Website url</th>
                            <th>About the  Website</th>
                        </tr>
                    </thead>
                    {records.map((item) => {
                        return (
                            <tbody key={item._id} className="mt-4">
                                <tr className="mt-4">
                                    <td>{item.webname} </td>

                                    <td style={{ color: 'blue', fontWeight: 'bold' }} >
                                        <a href={`${item.websiteurl}`}>{item.websiteurl}</a></td>

                                    <td>{item.about}</td>
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

export default UrlStroage;