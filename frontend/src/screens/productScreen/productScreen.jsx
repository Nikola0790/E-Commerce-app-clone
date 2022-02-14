import { useEffect, useState } from "react";
import { actionsGetSingleProduct } from "../../redux/singleProductData/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.singleProduct);
  const { loading, data, error } = productData;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(actionsGetSingleProduct(id));
  }, [dispatch]);

  console.log(data);

  let stars;
  if (!loading) {
    if (data.data.rating < 0.5) {
      stars = (
        <>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 0.5 && data.data.rating < 1) {
      stars = (
        <>
          <span className="material-icons-round">star_half</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 1 && data.data.rating < 1.5) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 1.5 && data.data.rating < 2) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_half</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 2 && data.data.rating < 2.5) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 2.5 && data.data.rating < 3) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_half</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 3 && data.data.rating < 3.5) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_border</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 3.5 && data.data.rating < 4) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_half</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 4 && data.data.rating < 4.5) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_border</span>
        </>
      );
    } else if (data.data.rating >= 4.5 && data.data.rating < 5) {
      stars = (
        <>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star</span>
          <span className="material-icons-round">star_half</span>
        </>
      );
    } else if (data.data.rating === 5) {
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
  }

  const stocks = (num) => {
    let opt = [];
    for (let i = 1; i <= num; i++) {
      opt[opt.length] = (
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return opt;
  };

  return (
    <>
      {loading ? (
        <p>LOADING</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="container-product-screen">
          <div className="product-picture">
            <img src={`${data.data.image}`} alt="product-image" />
          </div>
          <div className="product-details">
            <div>
              <h2>{data.data.name}</h2>
              <p className="product-stars-rating">
                <span>{stars}</span>
                {data.data.numReviews} Reviews
              </p>
              <p className="product-screen-price">
                Price: <span>{data.data.price} $</span>{" "}
              </p>
              <p className="product-description">
                Description: <br />
                <span>{data.data.description}</span>
              </p>
            </div>
          </div>
          <div className="cart-field">
            <div className="cart-card">
              <div className="brand-name">
                <p>{data.data.brand}</p>
              </div>
              <div>
                <p>Price</p>
                <span>{data.data.price} $</span>
              </div>
              {data.data.inStock > 0 ? (
                <>
                  <div>
                    <p>Status</p>
                    <span className="success">In Stock</span>
                  </div>
                  <div>
                    <p>Qty</p>
                    <select
                      name=""
                      id=""
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {stocks(data.data.inStock)}
                    </select>
                  </div>
                  <button>Add to Cart</button>
                </>
              ) : (
                <div>
                  <p>Status</p>
                  <span className="alert">Not In Stock</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
