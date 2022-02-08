import React from "react";



const Category = (props) => {
    console.log("propsinchild", props.item[0]);
    function titleCase(str) {
        return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    }
    return (
        <div className="col-12 col-md-6 col-lg-4 px-4 px-md-3">
            {/* <!-- cards 380 * 275 --> */}
            <div className="card mb-4 box-shadow">
                <img
                    alt="images"
                    className="card-hoverImg"
                    src={props.item[1]}
                />
                <button className="image-overlay" onClick={() => props.setPage(props.item[0])}>
                    <h3 className="card-hoverText mx-auto">{titleCase(props.item[0])}</h3>
                </button>
            </div>
        </div>
    );
}

export default Category;
