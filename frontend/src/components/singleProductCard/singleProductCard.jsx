import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  let stars;

  if (product.rating < 0.5) {
    stars = (
      <>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 0.5 && product.rating < 1) {
    stars = (
      <>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 1 && product.rating < 1.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 1.5 && product.rating < 2) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 2 && product.rating < 2.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 2.5 && product.rating < 3) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 3 && product.rating < 3.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 3.5 && product.rating < 4) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 4 && product.rating < 4.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (product.rating >= 4.5 && product.rating < 5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
      </>
    );
  } else if (product.rating === 5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
      </>
    );
  }

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
        <p>{stars}</p>
        <p className="product-price">{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;
