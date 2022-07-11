import React from "react";
import useFetch from "../../api/store";
import { getBanners } from "../../helpers/storeHelpers";

let windowWidthPixels = window.innerWidth;

const BannerImage = () => {
  let bannerImagePic = getBanners(
    useFetch("http://localhost:8000/storeResources")
  );
  if (windowWidthPixels <= 1000) {
    console.log("pixels are LESS than 1k");
    return <img src={bannerImagePic} alt="banner pic" className="banner" />;
  } else if (windowWidthPixels > 1000) {
    return <img src={bannerImagePic} alt="banner pic" className="banner" />;
  }
};

export default BannerImage;
