import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addToCart, incCartCount } from "../../features/cartSlice";
import Spinner from "../../components/spinner/Spinner";
import Pagination from "../../components/pagination/Pagination";
import { getObj } from "../../features/getObject";

function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(product);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { query } = useSelector((state) => state.query);
  const { page } = useSelector((state) => state.page);
  const navigate = useNavigate();
  const pages = Math.ceil(show?.data?.total / 10);

  const getProduct = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://dummyjson.com/products?limit=${page * 20}&skip=${
          page * 20 - 20
        }`
      );

      setShow(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductByCategory = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setShow(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductByQuery = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      setShow(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category == "" && query.length < 1) {
      getProduct();
    }
    return;
  }, [query, page]);

  useEffect(() => {
    if (category !== "" && query.length < 1) {
      getProductByCategory();
    }
    return;
  }, [category]);

  useEffect(() => {
    if (category == "" && query.length > 1) {
      getProductByQuery();
    } else {
      return;
    }
  }, [query]);

  const getObjById = (id) => {
    dispatch(getObj(show?.data?.products?.find((item) => item.id === id)));
  };

  return (
    <section className="w-full min-h-screen">
      {loading ? (
        <Spinner />
      ) : (
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
        </div>
      )}
      <div>{pages > 1 ? <Pagination data={show} /> : ""}</div>
    </section>
  );
}

export default Home;
