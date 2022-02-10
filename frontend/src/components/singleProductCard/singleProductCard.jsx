
const ProductCard = ({ product }) => {
    return (
        <div className="card-container">
            <div className="product-img">
                <img src={product.image} alt="product-picture" />
            </div>
            <div className="product-data">
                <p>{product.name}</p>
                <p>* * * * * </p>
                <p>{product.price} $</p>
            </div>
        </div>
    )
}

export default ProductCard;