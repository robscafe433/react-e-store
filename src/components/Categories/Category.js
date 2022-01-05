import React from "react";

const Category = (props) => {
    console.log("propsinchild", props.item[0]);
    return (
        <div className="col-12 col-md-6 col-lg-4 px-4 px-md-3">
            {/* <!-- cards 380 * 275 --> */}
            <div className="card mb-4 box-shadow">
                <img
                    alt="images"
                    className="card-hoverImg"
                    src={props.item[1]}
                />
                <div className="image-overlay">
                    <a href="#">
                        <h3 className="card-hoverText">{props.item[0]}</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Category;
