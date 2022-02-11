import { useEffect } from "react";
import { actionsGetSingleProduct } from "../../redux/singleProductData/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.singleProduct);
  const { loading, data, error } = productData;

  useEffect(() => {
    dispatch(actionsGetSingleProduct(id));
  }, [dispatch]);

  console.log(data);

  return (
    <>
      {loading ? (
        <p>LOADING</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <h1>ProductScreen {data.data.name}</h1>
      )}
    </>
  );
};

export default ProductScreen;
