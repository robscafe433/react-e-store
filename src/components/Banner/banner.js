import "./banner.css";
import React from "react";

const Banner = () => {
    /*-- XL- 1450 * 720 lg- 950 * 350 md- 992 * 576 sm- 768 * 576 --*/
    return (
        <div className="container">
            <div className="banner">
                <div className="banner__textWrapper">
                    <h1 className="banner__title">Your one stop shop</h1>
                    <h2>At a discount price</h2>
                    <a href="/categories/all.html" className="btn btn-dark">
                        View All Items
                        <i className="fal fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
