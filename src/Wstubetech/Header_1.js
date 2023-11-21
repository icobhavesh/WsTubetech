import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header_1 = () => {
  const [toggle,setToggle]=useState(false)
  //bg-blue-600
  return (
    <div className=" bg-purple-900 w-full p-4  ">
      <div className=" max-w-[1240px] h-200px  flex justify-between items-center m-auto">
        <div className="text-white md: text-[30px] font-mono">
          <h1>Bhavesh</h1>
        </div>
        {/* ToggleSection */}
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2x md:hidden block "
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2x md:hidden block "
          />
        )}
        {/*  hidden for sm device  */}
        <ul className=" text-bolder hidden md:flex gap-10 text-white font-family: emoji hover:underline ml-0 text-xl">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contactus</li>
        </ul>
        {/* //////////navbar for sm using toogle button ///////// */}
        <ul
          className={`" 
          duration-300 md:hidden gap-4 text-white bg-black h-screen fixed text-xl 
           top-[58px]  left-[-100%] w-full ${
             toggle ? "left-[0]" : "left-[-100%]"
           }`}
        >
          <li className="p-3">Home</li>
          <li className="p-3">Menu</li>
          <li className="p-3">About</li>
          <li className="p-3">Contactus</li>
        </ul>
      </div>
    </div>
  );
};

export default Header_1;
{/* <div class="w-full h-auto  bg-slate-700 text-white">
  <div class="max-w-[1240px]  justify-between text-black items-center flex h-auto bg-red-200  mx-auto p-4">
    <div class="pl-9">
      <h2>Hello there</h2>
    </div>
    <div class="flex">
      <h1>threedot
    <div class="md:flex hidden mx-auto gap-x-12 list-none ">
  <li class="text-center"> Home</li>
  <li> Home</li>
  <li> Home</li>
  <li> Home</li>
      </div>
      <div class="hidden md:flex">
        <h1>sign up</h1>
      </div>
  </div>
  </div> */}