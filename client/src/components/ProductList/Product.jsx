import { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({
  imageUrl,
  description,
  price,
  name,
  productId,
  countInStock,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  // function to decrease item quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // function to increase item quantity
  const increaseQuantity = () => {
    if (quantity < countInStock) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className="maincontainer">
      <div className="product">
        <>
          <div className="productdetails">
            <Link to={`/product/${productId}`} className="productheading">TAP TO VIEW DETAILS</Link>
            <i className="far fa-heart"></i>
          </div>

          <img src={imageUrl} alt={name} />

          <div className="productinfo">
            <p className="infoname">{name}</p>

            <p className="infodescription">
              {description.substring(0, 100)}...
            </p>

            <p className="infoprice">₹{price}</p>
          </div>
        </>
      </div>
      <div className="button">
        <div className="addcart">
          <span onClick={decreaseQuantity} className="remove">
            -
          </span>{" "}
          <span className="quantity">{quantity}</span>{" "}
          <span onClick={increaseQuantity} className="add">
            +
          </span>
          <br />
          <span className="nos">Nos</span>
        </div>

        <button
          onClick={() => onAddToCart(productId, quantity)}
          className="infobutton"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
