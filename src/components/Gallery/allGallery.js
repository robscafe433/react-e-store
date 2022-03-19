import "./gallery.css";
import GalleryCard from "../GalleryCard/galleryCard";
import { getAllProducts } from "../../helpers/storeHelpers";

const AllGallery = (props) => {
  console.log(">>>GalleryProps", props.storeData);
  let allGalleryCards = [];
  if (props.storeData) {
    let Allproducts = getAllProducts(props.storeData);
    allGalleryCards = Allproducts.map((product) => {
      return <GalleryCard key={product.id} product={product} />;
    });
  }

  return <div className="gallery">{allGalleryCards}</div>;
};

export default AllGallery;
