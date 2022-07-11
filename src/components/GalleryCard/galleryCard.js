import "./galleryCard.css";

const GalleryCard = (props) => {
  // console.log(">>>>GalleryCardProps", props);
  let product = props.product;
  return (
    <div className="card m-4 gallery-card">
      <img className="card-img-top" alt={product.name} src={product.image} />
      <div className="card-body">
        <h5 className="card-title text-center">{product.name}</h5>
        <p className="card-text text-center">${product.price.toFixed(2)}</p>
        <button
          className="add-cart btn btn-primary"
          href="#"
          data-id={product.id}
          onClick={() => (
            props.onAdd(product),
            props.setButtonDisable(true),
            props.setShippingCost("default")
          )} // Produces individual object from each category -rs, ex: shovel,plant, etc...-rs
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
