import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function PortfoiloList({ portfoilo }) {
    const [currentpage, setCurrentpage] = useState(1)
    const recordPerpage = 30;
    const lastindex = currentpage * recordPerpage;
    const firstindex = lastindex - recordPerpage;
    const records = portfoilo.slice(firstindex, lastindex)
    const npage = Math.ceil(portfoilo.length / recordPerpage);
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
            <div className='m-1 is-widescreen'>
                <div className='row '>
                    {
                        records.map((item, index) => {
                            return (
                                <div className='col-4 mt-5 ' keys={item._id} >
                                    <div>
                                        <a href={`${item.portfollio}`} style={{ textDecoration: 'none' ,boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}} className='fw-bold p-1'>@{item.developername}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <nav aria-label="Page navigation example" role="navigation" >
                    <ul className="pagination m-4">
                        <li>
                            <a herf="#" className="page-link" aria-label="Previous" onClick={prePage}> prev</a>
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
                            <a herf="#" className="page-link" aria-label="Previous" onClick={nextPage}> next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default PortfoiloList;