import "./gallery.css";
import GalleryCard from "../GalleryCard/galleryCard";
import { getCategoryProducts } from "../../helpers/storeHelpers";
import { getAllProducts } from "../../helpers/storeHelpers";
import { useParams } from "react-router-dom";

const Gallery = (props) => {
  const { name } = useParams();
  console.log(">>>name", name);
  let galleryCards = [];
  if (name) {
    if (props.storeData) {
      let products = getCategoryProducts(props.storeData, name);
      galleryCards = products.map((product) => {
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
  } else {
    if (props.storeData) {
      let Allproducts = getAllProducts(props.storeData);
      galleryCards = Allproducts.map((product) => {
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
  }

  return <div className="gallery">{galleryCards}</div>;
};

export default Gallery;
