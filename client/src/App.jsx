import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home";
import NotFound from "./Components/NotFound";
import Cart from "./Pages/Cart";
import ProductSingle from "./Pages/Product";

import "react-toastify/dist/ReactToastify.css";
import Register from "./Pages/auth/Register";
import Login from "./Pages/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";
import ProductList from "./Pages/ProductList";
import CheckoutSuccess from "./Pages/Success";
import Dashboard from "./Components/admin/Dashboard";
import Products from "./Components/admin/Products";
import Users from "./Components/admin/Users";
import Orders from "./Components/admin/Oders";
import CreateProduct from "./Components/admin/CreateProduct";
import ProductsList from "./Components/admin/lists/ProductsList";
// import Product from "./Components/Details/Product";
import UserProfile from "./Components/Details/UserProfile";
import Order from "./Components/Details/Order"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:category" element={<ProductList/>} />
            <Route path="/product/:id" element={<ProductSingle/>} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/admin" element={<Dashboard />}>
              <Route path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
                <Route path="create-product" element={<CreateProduct />} />
              </Route>
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
