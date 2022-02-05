import React from "react";

const Navbar = (props) => {
    console.log(">>>navbarprops",props);
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded fixed-top">
                {/* href needs react setup*/}
                <a className="navbar-brand" href="index.html">
                    Robert's One Stop Shop
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample09"
                    aria-controls="navbarsExample09"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* href needs react setup*/}
                            <a className="nav-link" href="index.html" onClick={() => props.setPage('home')}>
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* // onclicks href needs react setup*/}
                            <a className="nav-link" href="/" onClick={() => props.setPage('groceries')}>
                                Groceries
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* // onclicks href needs react setup*/}
                            <a className="nav-link" href="/" onClick={() => props.setPage('household')}>
                                Household
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* // onclicks href needs react setup*/}
                            <a className="nav-link" href="/" onClick={() => props.setPage('garden')}>
                                Garden
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* // onclicks href needs react setup*/}
                            <a className="nav-link" href="/">
                                Cart
                            </a>
                        </li>
                    </ul>

                    <button
                        // onclicks href needs react setup
                        // onclick="document.location.href='/'"
                        className="cart btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Cart <span>0</span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
