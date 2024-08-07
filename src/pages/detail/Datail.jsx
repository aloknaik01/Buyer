import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incCartCount } from "../../features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Datail() {
  const { obj } = useSelector((state) => state.obj);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  console.log(obj);
  const [img, setImg] = useState("");
  useEffect(() => {
    setImg(obj.thumbnail);
  }, []);

  return (
    <section className="w-fll h-screen">
      <div className="contaier mx-auto px-10 pt-28">
        <div className="product-detail flex justify-between items-center">
          <div className="left w-7/12  h-screen  bg-[#F7F7F7]">
            <div className="inner-left felx justify-center items-center">
              <img
                src={img}
                alt={obj.title}
                width={500}
                height={500}
                // className="mt-56"
              />
            </div>
          </div>
          <div className="right w-5/6 h-screen px-10">
            <div>
              <p className="font-semibold text-gray-400 uppercase tracking-wide ">
                {obj.category}
              </p>
              <p className="text-xl font-semibold tracking-wide">{obj.title}</p>
              <span className="opacity-80">${obj.price}</span>
              <span className="ml-3">|</span>
              <span className="text-green-400 ml-3">
                {obj.discountPercentage} %
              </span>
              <span className="opacity-80"> off</span>
              <p className="opacity-80 tracking-wide text-sm">
                {obj.availabilityStatus} : {obj.shippingInformation}
              </p>
            </div>
            <div className="cart-wishlist flex items-center gap-8">
              <button
                className=" my-4 border border-black px-5 py-3 rounded-lg hover:bg-black hover:text-white duration-500"
                onClick={() => {
                  dispatch(addToCart(obj));
                  dispatch(incCartCount());
                }}
              >
                Add to Cart
              </button>
              <FaHeart className="text-2xl bg- text-red-600 hover:text-red-500" />
            </div>

            <div className="flex gap-5 my-5">
              {obj?.images?.map((item) => (
                <Link
                  key={item}
                  className="bg-[#F7F7F7] rounded-xl hover:shadow-xl"
                  onClick={() => {
                    setImg(item);
                  }}
                >
                  <img
                    key={item}
                    src={item}
                    height={200}
                    width={200}
                    className="hover:scale-105 duration-300"
                  />
                </Link>
              ))}
            </div>
            <p className="text-lg font-semibold mt-4 opacity-80">Description</p>
            <p className="opacity-80 tracking-wide text-sm">
              {obj.description}
            </p>
            {/* <div className="my-5 text-sm opacity-80">
              <p className="text-lg font-semibold mt-4">Order Detail</p>
              <p>Minimum Order Quantity : {obj.minimumOrderQuantity}</p>
              <p className="">Return Policy : {obj.returnPolicy}</p>
              <p>Warrenty: {obj.warrantyInformation}</p>
              <p>Weight: {obj.weight}</p>
            </div> */}

            <div>
              <button
                className=" my-4 border border-black px-5 py-3 rounded-lg hover:bg-black hover:text-white duration-500"
                onClick={() => 
                  navigate('/payment')
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Datail;
