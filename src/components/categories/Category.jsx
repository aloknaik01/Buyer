import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryList } from "../../features/categorySlice";
import { useNavigate } from "react-router-dom";

function Category() {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getCategory = () => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
        onChange={(e) => {
          dispatch(setCategoryList(e.target.value))
           navigate('/shop')
        }}
        defaultValue={"electronics"}
      >
        <option value="">Choose a Category</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Category;
