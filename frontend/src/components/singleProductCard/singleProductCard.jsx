import "material-icons/iconfont/material-icons.css";

const ProductCard = ({ product }) => {
  let stars;

  if (product.rating < 0.5) {
    stars = (
      <p>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 0.5 && product.rating < 1) {
    stars = (
      <p>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 1 && product.rating < 1.5) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 1.5 && product.rating < 2) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 2 && product.rating < 2.5) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 2.5 && product.rating < 3) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 3 && product.rating < 3.5) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 3.5 && product.rating < 4) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 4 && product.rating < 4.5) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
      </p>
    );
  } else if (product.rating >= 4.5 && product.rating < 5) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
      </p>
    );
  } else if (product.rating === 5) {
    stars = (
      <p>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
      </p>
    );
  }

  return (
    <div className="card-container">
      <div className="product-img">
        <img src={product.image} alt="product-picture" />
      </div>
      <div className="product-data">
        <p className="product-name">{product.name}</p>
        <p>{stars}</p>
        <p className="product-price">{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;
