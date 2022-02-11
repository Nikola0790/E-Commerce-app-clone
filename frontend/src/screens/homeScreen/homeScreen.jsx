import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/singleProductCard/singleProductCard";
import { actionsGetProductsData } from "../../redux/productData/actions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.allProducts);
  const { loading, data, error } = productsData;

  useEffect(() => {
    dispatch(actionsGetProductsData());
  }, [dispatch]);

  return (
    <div className="container-home">
      {loading ? (
        <p>LOADING</p>
      ) : error !== "" ? (
        <p>{error}</p>
      ) : (
        data.data.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })
      )}
    </div>
  );
};

export default HomeScreen;
