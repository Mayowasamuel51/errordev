
function Search() {
    return (
        <>

            <section className="hero is-info  is-small">
                <div className="hero-body">
                    <div className="container">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input is-medium" type="search" placeholder="search for questions" />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-search"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fa fa-empire"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Search;