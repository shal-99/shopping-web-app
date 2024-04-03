import "./SideBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawerlinks" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="sidedrawercartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
