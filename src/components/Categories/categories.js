import React from "react";
import Data from "../../api/db.json";
import "./categories.css"
import Category from "./Category";

function Categories() {
    const categoryList = Data.items.map(item => <Category item={item}/>)
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
