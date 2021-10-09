import React from "react";
import catGroceries from "../../Images/CategoryImages/groceriesCard.jpg";
import catHousehold from "../../Images/CategoryImages/householdCard.jpg";
import catGarden from "../../Images/CategoryImages/gardenCard.jpg";
import "./categories.css"

const Categories = (props) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 px-4 px-md-3">
                        {/* <!-- cards 380 * 275 --> */}
                        <div className="card mb-4 box-shadow">
                            <img
                                alt="images"
                                className="card-hoverImg"
                                src={catGroceries}
                            />
                            <div className="image-overlay">
                                <a href="#">
                                    <h3 className="card-hoverText">
                                        Groceries
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-4 px-md-3">
                        <div className="card mb-4 box-shadow">
                            <img
                                alt="images"
                                className="card-hoverImg"
                                src={catHousehold}
                            />
                            <div className="image-overlay">
                                <a href="#">
                                    <h3 className="card-hoverText">
                                        Household
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-4 px-md-3">
                        <div className="card mb-4 box-shadow">
                            <img
                                alt="images"
                                className="card-hoverImg"
                                src={catGarden}
                            />
                            <div className="image-overlay">
                                <a href="#">
                                    <h3 className="card-hoverText">Garden</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
