import "./gallery.css";
import GalleryCard from "../GalleryCard/galleryCard";
import { getCategoryProducts } from "../../helpers/storeHelpers";

const Gallery = (props) => {
  console.log(">>>GalleryProps", props);
  let galleryCards = [];
  if (props.storeData) {
    let products = getCategoryProducts(props.storeData, props.page);
    galleryCards = products.map((product) => {
      return <GalleryCard key={product.id} product={product} />;
    });
  }

  return <div className="gallery">{galleryCards}</div>;
};

export default Gallery;
