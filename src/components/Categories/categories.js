import React from "react";
// import Data from "../../api/db.json";
import "./categories.css"
import Category from "./Category";
import useFetch from "../../api/store";
import getCategoriesImages from "../../helpers/storeHelpers"

function Categories() {
    let data = useFetch("http://localhost:3000/items");
    let categoryImages = getCategoriesImages(data);
    const categoryList = categoryImages.items.map((item, index) => <Category index={index} item={item}/>)
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
