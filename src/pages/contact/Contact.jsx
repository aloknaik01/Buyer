import React from "react";

function Contact() {
  return (
    <section className="w-full h-screen px-10 py-28 flex">
      <div className="left w-full h-screen">
        <div className="w-full min-h-screen px-10 py-10 rounded-lg">
          <div>
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="opacity-70 text-sm">
              Our friendly team would love to hear from you
            </p>
          </div>
          <div className="conatact-form my-8">
            <form aria-required>
              <div className="flex gap-4 my-4">
                <div className="fName">
                  <label htmlFor="first">First Name </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-500 rounded-lg px-5 py-2"
                  />
                </div>
                <div className="lName">
                  <label htmlFor="last">Last Name </label>
                  <input
                    id="last"
                    type="text"
                    placeholder="Last Name"
                    className="px-5 py-2 border border-gray-500 rounded-lg"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  id="emial"
                  type="email"
                  placeholder="Enter Email"
                  className=" w-[95%] px-5 py-2 border border-gray-500 rounded-lg"
                />
              </div>
              <div className="phone-no my-4">
                <label htmlFor="phone" className="block">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="number"
                  placeholder="+91 0000-0000-0000"
                  className=" w-[95%] px-5 py-2 border border-gray-500 rounded-lg"
                />
              </div>
              <div className="flex gap-2">
                <input type="radio" />
                <p>You agrre to our friendly Privacy policy</p>
              </div>
              <button
                type="submit"
                className=" my-4 w-[95%] bg-green-500 px-4 py-2 rounded-xl hover:bg-green-600 text-white"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="right w-full h-screen">
        <div className="mt-8">
          <img src="/contact.jpg" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
