import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, incCartCount } from "../../features/cartSlice";

function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      setLoading(true);
      const data = await axios.get("https://dummyjson.com/products?limit=12");

      setShow(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getObjById = (id) => {
    localStorage.setItem("obj", JSON.stringify(show?.data?.products?.find((item) => item.id === id)));
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="home w-full min-h-screen">
          <div className="hero  mx-auto my-20">
            <div
              onClick={() => {
                navigate("/shop");
              }}
            >
              <img
                src="/home.webp"
                alt="home-png"
                className="w-full h-screen object-cover"
              />
            </div>
            <div>
              <div className="px-10 py-32 grid grid-cols-4 gap-y-16 self-center min-h-screen">
                {show?.data?.products?.map((item) => (
                  <div key={item?.id} className=" mx-auto flex flex-col gap-4">
                    <Link
                      className=" px-5 w-[150px] h-[250px] flex justify-center items-center rounded-lg hover:shadow-2xl  duration-500"
                      onClick={() => {
                        getObjById(item?.id);
                        navigate("/details");
                      }}
                    >
                      <img
                        src={item?.thumbnail}
                        alt={item?.title}
                        height={150}
                        width={150}
                        className="hover:scale-[1.1] duration-300"
                      />
                    </Link>
                    <div className="">
                      <h2 className="">{item?.title.slice(0, 19)}...</h2>
                      <p>Price : ${item?.price}</p>
                      <button
                        className=" my-4 border border-black px-5 py-3 rounded-lg hover:bg-black hover:text-white duration-500"
                        onClick={() => {
                          dispatch(addToCart(item));
                          dispatch(incCartCount());
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-green-400  hover:bg-green-500 duration-300 px-10 py-3 rounded-full text-white font-semibold tracking-wide"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
