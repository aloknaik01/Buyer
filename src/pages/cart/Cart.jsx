import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decCartCount } from "../../features/cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const [totalCost, settotalCost] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);


  const getCost = () => {
    let cost = 0;
    cart?.map((item) => {
      cost = cost + item?.price;
      settotalCost(cost);
      if (cart.length < 1) {
        localStorage.setItem("cost", JSON.stringify(cost));
      }
    });
  };

  useEffect(() => {
    getCost();
  }, [cart]);


  return (
    <>
      {cart.length < 1 ? (
        <EmptyCart />
      ) : (
        <section className="w-full min-h-screen bg-[#F6F6F6] relative">
          <div className="container mx-auto pt-28 text-black">
            <div className="flex justify-between ">
              <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-green-400 duration-500">
                <FaArrowLeft onClick={() => navigate("/")} />
              </div>
              <h2 className="text-xl">My Cart</h2>
              <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-green-400 duration-500">
                <RxCross2 onClick={() => navigate("/")} />
              </div>
            </div>
          </div>
          <div className="p-10 flex flex-col gap-5 min-h-screen">
            {cart?.map((item) => (
              <div
                key={item?.id}
                className="bg-white shadow-xl w-full rounded-3xl overflow-hidden"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => {
                    navigate("/details");
                  }}
                >
                  <div className="flex  justify-between items-center gap-20">
                    <img src={item?.thumbnail} width={150} height={150} />
                    <div className="2nd">
                      <h2 className="font-bold">{item?.title}</h2>
                      <p className="text-sm text-gray-600">
                        Availability : {item?.availabilityStatus}
                      </p>
                      <p className="text-sm text-green-400">
                        Price: ${item?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="px-32 ">
              <div className="flex justify-between items-center  w-3/12 mx-auto text-gray-600">
                <p>item select</p>
                <p>{cart.length}</p>
              </div>
              <div className="flex justify-between items-center  w-3/12 mx-auto text-green-400 font-semibold">
                <p>Total</p>
                <p>${totalCost}</p>
              </div>
            </div>
            <div className="text-center flex gap-10 p-10">
              <div className=" mx-auto flex items-center justify-cente gap-5">
                <button
                  className="bg-green-400  hover:bg-green-500 duration-300 px-10 py-3 rounded-full text-white font-semibold tracking-wide"
                  onClick={() => navigate("/payment")}
                >
                  Order Now
                </button>
                <button
                  className="bg-green-400  hover:bg-green-500 duration-300 px-10 py-3 rounded-full text-white font-semibold tracking-wide"
                  onClick={() => {
                    dispatch(decCartCount());
                    dispatch(clearCart());
                  }}
                >
                  Remove All
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Cart;
