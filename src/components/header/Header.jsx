import React, { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Category from "../categories/Category";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../features/inputSlice";
function Header() {
  const count = useSelector((state) => state.cart.count);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(input));
    navigate('/shop')
  };
  return (
    <header className="w-full bg-white px-10 py-5 shadow-xl fixed top-0 left-0 z-40">
      <nav className=" container flex justify-between  ">
        <div>
          <Link to="/" className="text-2xl font-semibold">
            Buyer
          </Link>
        </div>

        <form
          className="search-box relative flex gap-2 "
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            type="text"
            placeholder="search for a product"
            defaultValue={""}
            className="border border-gray-400 px-5 py-2 rounded-xl"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="  bg-green-400 px-4 py-2 rounded-lg  hover:bg-green-500 duration-300"
            onClick={(e) => submitHandler(e)}
          >
            Search
          </button>
        </form>

        <div className="flex gap-7 justify-center items-center">
          {[
            {
              name: "Home",
              slug: "/",
            },

            {
              name: "Shop",
              slug: "/shop",
            },

            {
              name: "Contact",
              slug: "/contact",
            },

            {
              name: <Category />,
              slug: "/",
            },
          ].map((item, index) => (
            <NavLink
              to={item?.slug}
              key={index}
              className="font-light text-gray-900 hover:font-semibold duration-500"
            >
              {item.name}
            </NavLink>
          ))}
          <div className="flex gap-5">
            <FaRegUser className="hover:text-green-400 duration-500" />
            <div className="relative">
              <div className="bg-green-400 text-white text-[10px] rounded-full h-[15px] w-[15px] flex justify-center items-center absolute top-[-15px] left-[10px] ">
                {count}
              </div>
              <FiShoppingCart
                className="hover:text-green-400 duration-500"
                onClick={() => navigate("/cart")}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
