import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  // Dispatch an action to add the product to the cart
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // Update the cart data in local storage
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

// Action creator to remove an item from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
  // Dispatch an action to remove the product from the cart
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  // Update the cart data in local storage
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
