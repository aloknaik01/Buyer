import React from "react";
import pending from '/pendings.gif'
function Pending() {
  return (
    <section>
       <div className="hero  mx-auto my-20">
          <div>
            <img
              src={pending}
              alt="pending.."
              className="w-full h-screen object-cover"
            />
          </div>
          </div>
    </section>
  );
}


export default Pending;
