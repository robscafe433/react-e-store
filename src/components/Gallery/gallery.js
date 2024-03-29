import "./gallery.css";
import GalleryCard from "../GalleryCard/galleryCard";
import { getCategoryProducts } from "../../helpers/storeHelpers";
import { getAllProducts } from "../../helpers/storeHelpers";
import { useParams } from "react-router-dom";

const Gallery = (props) => {
  const { name } = useParams();
  let galleryCards = [];
  let products = [];
  if (name) {
    if (props.storeData) {
      products = getCategoryProducts(props.storeData, name);
    }
  } else {
    if (props.storeData) {
      products = getAllProducts(props.storeData);
    }
  }
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

  return <div className="gallery">{galleryCards}</div>;
};

export default Gallery;
