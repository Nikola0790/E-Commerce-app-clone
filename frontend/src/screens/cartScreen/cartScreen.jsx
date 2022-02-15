import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  actionAddCartData,
  actionRemoveCartData,
} from "../../redux/cartData/actions";

const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const numberOfProduct = search.split("=")[1];
  const product = useSelector((state) => state.cartData);
  const { loading, data } = product;

  useEffect(() => {
    dispatch(actionAddCartData(id, numberOfProduct));
  }, [dispatch, id, numberOfProduct]);

  const stock = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr[arr.length] = (
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    return arr;
  };

  const totalCost = () => {
    return data.reduce(
      (prev, current) => prev + current.price * current.qty,
      0
    );
  };
  // ****************
  const totalItems = () => {
    return data.reduce(
      (prev, current) => parseFloat(prev) + parseFloat(current.qty),
      0
    );
  };

  return (
    <div className="container-cart-screen">
      {loading ? (
        <p>LOADING</p>
      ) : (
        <>
          <table>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.productId}>
                    <td>
                      <img src={item.image} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            actionAddCartData(item.productId, e.target.value)
                          )
                        }
                      >
                        {stock(item.inStock)}
                      </select>
                    </td>
                    <td>{item.price} $</td>
                    <td>
                      <button
                        onClick={() =>
                          dispatch(actionRemoveCartData(item.productId))
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="total-field">
            <div>
              <p>
                Total (items {totalItems()}): {totalCost()} $
              </p>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
