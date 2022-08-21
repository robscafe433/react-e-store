import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
  }
  return (
    <div className="col-12 col-md-6 col-lg-4 px-4 px-md-3">
      {/* <!-- cards 380 * 275 --> */}
      <div className="card mb-4 box-shadow">
        <img alt="images" className="card-hoverImg" src={props.item[1]} />
        <Link
          className="btn image-overlay"
          to={"/react-e-store/category/" + props.item[0]}
        >
          <h3 className="card-hovertext mx-auto">{titleCase(props.item[0])}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Category;
