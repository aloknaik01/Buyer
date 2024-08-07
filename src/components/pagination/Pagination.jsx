import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decPage, incPage } from "../../features/pageCountSlice";

function Pagination({ data }) {
  const { page } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <section className="pagination container mx-auto">
        <div className="flex justify-center items-center gap-4">
          <div className="left-arr">
            {page >= 2 ? (
              <div className="bg-green-400 w-6 h-6 rounded-full flex justify-center items-center">
                <FaArrowLeft onClick={() => dispatch(decPage())} />
              </div>
            ) : (
              ""
            )}
          </div>
          <p>
            {page} of {Math.ceil(data?.data?.total / 10)}
          </p>
          <div className="right-arr">
            {page <= 19 ? (
              <div className="bg-green-400 w-6 h-6 rounded-full flex justify-center items-center">
                <FaArrowRight onClick={() => dispatch(incPage())} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pagination;
