import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import gpay from "/gpay.jpeg";
import netbanking from "/netbanking.png";
import paypal from "/paypal.png";
import visa from "/visa.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Payment() {
  const navigate = useNavigate();
  const [totalCost, settotalCost] = useState();
  useEffect(() => {
    const cost = localStorage.getItem("cost")
      ? JSON.parse(localStorage.getItem("cost"))
      : "";
    settotalCost(cost);
  }, []);

  console.log(totalCost);
  
  return (
    <div className="w-fulL h-[100%] bg-[#F6F6F6]">
      <section className="container px-32 pt-28">
        <div className="flex justify-between">
          <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-green-400 duration-500">
            <FaArrowLeft onClick={() => navigate("/")} />
          </div>
          <h2 className="text-xl">Payments</h2>
          <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-green-400 duration-500">
            <RxCross2 onClick={() => navigate("/")} />
          </div>
        </div>

        <div className="payment-list p-10 flex flex-col gap-5">
          {[
            {
              img: visa,
              title: "DebitCard/CreditCard",
            },
            {
              img: netbanking,
              title: "Netbanking",
            },
            {
              img: paypal,
              title: "Paypal",
            },
            {
              img: gpay,
              title: "Gogle pay",
            },
          ].map((item) => (
            <div
              key={item?.title}
              className="bg-white shadow-xl w-full rounded-3xl overflow-hidden"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center px-6 w-full h-28">
                  <img src={item.img} width={50} height={50} />
                  <div className="2nd">
                    <h2 className="font-bold">{item?.title}</h2>
                  </div>
                </div>
                <div className="3rd flex flex-col gap-10 mr-20">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-green-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <div className="px-32">
            <div className="flex justify-between items-center  w-6/12 mx-auto text-gray-600">
              <p>Subtotal</p>
              <p>${totalCost}</p>
            </div>
            <div className="flex justify-between items-center  w-6/12 mx-auto text-gray-600">
              <p>Delivery</p>
              <p>$10</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between items-center  w-6/12 mx-auto text-green-400 font-semibold">
              <p>Total</p>
              <p>${totalCost + 10}</p>
            </div>
          </div>
          <div className="text-center flex gap-10 p-10">
            <div className=" mx-auto flex items-center justify-cente gap-5">
              <button
                className="bg-green-400  hover:bg-green-500 duration-300 px-10 py-3 rounded-full text-white font-semibold tracking-wide"
                onClick={() => navigate("/pending")}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
