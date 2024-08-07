import React from "react";

function EmptyCart() {
  return (
    <section>
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-3xl font-semibold my-28">
            Opps! Your Cart is Empty
        </h2>
      </div>
    </section>
  );
}

export default EmptyCart;
