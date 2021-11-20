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
        return (
            <img src={bannerImagePic} className="banner" />
            // <div>
            //     {console.log("Inside BannerImage component")}
            //     {console.log("This is line two")};{bannerImagePic}
            // </div>
        );
    } else if (windowWidthPixels > 1000) {
        console.log("pixels are way MORE than 1k");
        return (
            <img src={bannerImagePic} className="banner" />

            // <div>
            //     {console.log("Inside BannerImage component")}
            //     {console.log("This is line two")};{bannerImagePic}
            // </div>
        );
    }
};

export default BannerImage;
