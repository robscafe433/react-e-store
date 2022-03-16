import "./banner.css";
import React from "react";
import BannerImage from "./BannerImage";

// import useFetch from "../../api/store";
// import {
//     // getCategories,
//     // getCategoriesImages,
//     getBanners,
// } from "../../helpers/storeHelpers";

const Banner = (prop) => {
  /*-- XL- 1450 * 720 lg- 950 * 350 md- 992 * 576 sm- 768 * 576 --*/

  return (
    <div className="banner-first-div">
      <BannerImage />

      <div className="banner-text-wrapper">
        <h1 className="banner-title">Your one stop shop</h1>
        <h2>At a discount price</h2>
        <a href="/categories/all.html" className="btn btn-dark">
          View All Items
          <i className="fal fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Banner;
