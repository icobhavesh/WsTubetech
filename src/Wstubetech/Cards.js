import React from "react";
import single from "../images/triple.png";
import Double from "../images/triple.png";
import triple from "../images/triple.png";

 export const Cards = () => {
  return (
    <div className="w-full pt-[100px] mt-8 px-4 bg-blue-300">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Web development
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Lorem Ipsum is simply </p>
            <p className="py-2 border-b mx-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Digital Marketing
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Lorem Ipsum is simply </p>
            <p className="py-2 border-b mx-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            App Development
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Lorem Ipsum is simply </p>
            <p className="py-2 border-b mx-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
