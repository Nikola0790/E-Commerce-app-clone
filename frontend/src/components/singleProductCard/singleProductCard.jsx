import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";
import Rating from "../ratingStars/rating";

const ProductCard = ({ product }) => {
  return (
    <div className="card-container">
      <div className="product-img">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="product-picture" />
        </Link>
      </div>
      <div className="product-data">
        <Link to={`/product/${product._id}`}>
          <p className="product-name">{product.name}</p>
        </Link>
        <p>{<Rating rating={product.rating} />}</p>
        <p className="product-price">{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;
