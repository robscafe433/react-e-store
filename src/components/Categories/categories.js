import React from "react";
import "./categories.css";
import Category from "./Category";
// import useFetch from "../../api/store";
import { getCategoriesImages } from "../../helpers/storeHelpers";

const Categories = (props) => {
    console.log("cat", props);

    let categoryList = [];
    if (props.storeData) {
        // const data = useFetch("http://localhost:8000/items");
        let categoryImages = getCategoriesImages(props.storeData);
        categoryList = categoryImages.map((item, index) => {
            return <Category index={index} item={item} />;
            // console.log("rr", items);
        });
    }
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    {categoryList} ds
                </div>
            </div>
        </div>
    );
};

export default Categories;
