import "./banner.css";
import React from "react";
import BannerImage from "./BannerImage";
import { Link } from "react-router-dom";

const Banner = (props) => {
  /*-- XL- 1450 * 720 lg- 950 * 350 md- 992 * 576 sm- 768 * 576 --*/

  return (
    <div className="banner-first-div">
      <BannerImage />

      <div className="banner-text-wrapper top-center-container ">
        <h1 className="banner-title">Your one stop shop</h1>
        <h2>At a discount price</h2>
        <Link className="btn btn-dark" to="/react-e-store/category/">
          View All Items
        </Link>
      </div>
    </div>
  );
};

export default Banner;
