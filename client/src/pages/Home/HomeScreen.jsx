import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Components
import Product from "../../components/ProductList/Product";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const handleAddToCart = (productId, quantity) => {
    dispatch(addToCart(productId, quantity));
    navigate(`/cart`);
  };

  return (
    <div className="homescreen">
      <h2 className="homescreentitle">All Products</h2>
      <div className="homescreenproducts">
        {loading ? (
          <img
            src="https://miro.medium.com/v2/resize:fit:679/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
            alt="Loading..."
          />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              countInStock={product.countInStock}
              onAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
