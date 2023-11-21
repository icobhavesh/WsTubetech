import React from "react";
import Typed from "react-typed";
function Middle() {
  return (
    <div className="bg-purple-900 w-full pt-[80px] pb-[170px] ">
      <div className="max-w-[1240px] m-[100px] text-center mx-auto items-center ">
        <div className="text-2xl text-white">
          <h1>Learn with us</h1>
        </div>
        <div className="md:text-8xl text-6xl text-white">
          <p>Grow with us</p>
        </div>
        <div className="text-white text-3xl mb-30">
          Learn
          <Typed
            className="pl-3 "
            strings={["Web development", "Hacking", "Graphic designing"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </div>
        <div className="m-auto pt-[20px]">
          <button className="bg-purple-800  cursor-pointer mx-auto mt-3 text-center border rounded-md text-white px-[30px] py-[5px]">
            Explore
          </button>
        </div>
        {/* <div className="p-[3px] bg-black border-2px ">getstarted</div> */}
      </div>
    </div>
  );
}

export default Middle;
