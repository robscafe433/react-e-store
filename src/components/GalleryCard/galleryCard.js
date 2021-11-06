import './galleryCard.css';

const GalleryCard = (props) => {
    console.log(">>>>GalleryCardProps", props);
    let product = props.product;
    return (
        <div className="card m-4 gallery-card">
                <img className="card-img-top" src={product.image} />
                <div className="card-body">
                    <h5 className="card-title text-center">{product.name}</h5>
                    <p className="card-text text-center">${product.price.toFixed(2)}</p>
                    <a className="add-cart" href="#" data-id={product.id} className="btn btn-primary">Add to Cart</a>  
                </div>
            </div>
    )
}

export default GalleryCard;