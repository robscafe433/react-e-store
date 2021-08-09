import React from "react";

const Navbar = (props) => {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light rounded fixed-top">
                  {/* href needs react setup*/}
                    <a class="navbar-brand" href="index.html">
                        Robert's One Stop Shop
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample09"
                        aria-controls="navbarsExample09"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample09">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                              {/* href needs react setup*/}
                                <a class="nav-link" href="index.html">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                              {/* // onclicks href needs react setup*/}
                                <a class="nav-link" href="#">
                                    Groceries
                                </a>
                            </li>
                            <li class="nav-item">
                              {/* // onclicks href needs react setup*/}
                                <a class="nav-link" href="#">
                                    Household
                                </a>
                            </li>
                            <li class="nav-item">
                              {/* // onclicks href needs react setup*/}
                                <a class="nav-link" href="#">
                                    Garden
                                </a>
                            </li>
                            <li class="nav-item">
                              {/* // onclicks href needs react setup*/}
                                <a class="nav-link" href="#">
                                    Cart
                                </a>
                            </li>
                        </ul>

                        <button
                        // onclicks href needs react setup
                            onclick="document.location.href='#'" 
                            class="cart btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Cart <span>0</span>
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
