import React from "react";
function Category({item}) {
    return (
        <div className="col-12 col-md-6 col-lg-4 px-4 px-md-3">
            {/* <!-- cards 380 * 275 --> */}
            <div className="card mb-4 box-shadow">
                <img
                    alt="images"
                    className="card-hoverImg"
                    src={item.categoryImage}
                />
                <div className="image-overlay">
                    <a href="#">
                        <h3 className="card-hoverText">{item.category}</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Category;
