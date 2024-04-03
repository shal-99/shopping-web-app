import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbarlogo">
        <h2>Shopping App 🛒</h2>
      </div>

      <ul className="navbarlinks">
        <li>
          <Link to="/cart" className="cartlink">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogobadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
