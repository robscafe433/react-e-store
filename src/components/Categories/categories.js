import React from "react";
import "./categories.css";
import Category from "./Category";
import { getCategoriesImages } from "../../helpers/storeHelpers";

const Categories = (props) => {
    console.log("log_props", props);

    let categoryList = [];
    if (props.storeData) {
        let categoryImages = getCategoriesImages(props.storeData);
        categoryList = categoryImages.map((item, index) => {
            return <Category key={index} item={item} setPage={props.setPage} />;
        });
    }
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    {categoryList}
                </div>
            </div>
        </div>
    );
};

export default Categories;
