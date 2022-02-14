import { useEffect, useState } from "react";
import { actionsGetSingleProduct } from "../../redux/singleProductData/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "../../components/ratingStars/rating";

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
                <span>
                  <Rating rating={data.data.rating} />
                </span>
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
