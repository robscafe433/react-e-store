import "./gallery.css";
import GalleryCard from "../GalleryCard/galleryCard";
import { getCategoryProducts } from "../../helpers/storeHelpers";
import { getAllProducts } from "../../helpers/storeHelpers";

const Gallery = (props) => {
  // console.log(">>>GalleryProps", props);
  let galleryCards = [];
  if (props.page !== "home" && props.page !== "all") {
    if (props.storeData) {
      let products = getCategoryProducts(props.storeData, props.page);
      galleryCards = products.map((product) => {
        // console.log("These are getCategoryProducts: ", products);  // just  the three objects in each group -rs
        return (
          <GalleryCard
            key={product.id}
            product={product}
            onAdd={props.onAdd}
            setButtonDisable={props.setButtonDisable}
            setShippingCost={props.setShippingCost}
          />
        );
      });
    }
  } else if (props.page === "all") {
    if (props.storeData) {
      let Allproducts = getAllProducts(props.storeData);
      galleryCards = Allproducts.map((product) => {
        return <GalleryCard key={product.id} product={product} />;
      });
    }
  }

  return <div className="gallery">{galleryCards}</div>;
};

export default Gallery;
