import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components
import Navbar from "./components/NavBar/Navbar";
import SideDrawer from "./components/SideBar/SideBar";
import Backdrop from "./components/Backdrop/Backdrop";

// Pages
import HomeScreen from "./pages/Home/HomeScreen";
import ProductScreen from "./pages/Product/ProductView";
import CartScreen from "./pages/Cart/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <BrowserRouter>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
