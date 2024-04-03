import "./ProductView.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreenleft">
            <div className="leftimage">
              <img
                style={{ height: "50%" }}
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className="leftinfo">
              <p className="leftname">{product.name}</p>
              <p>Price: ₹{product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreenright">
            <div className="rightinfo">
              <p>
                Price:
                <span>₹{product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
