import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Pending from "./pages/pending/Pending";
import Detail from './pages/detail/Datail'
import Contact from "./pages/contact/Contact";
import Shop from './pages/shop/Shop';
import Home from "./pages/home/Home";
const rotuer = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/pending",
        element: <Pending />,
      },
      {
        path: "/details",
        element: <Detail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rotuer} />
    </Provider>
  </React.StrictMode>
);
