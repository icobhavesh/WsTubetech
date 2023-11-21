import React from "react";
import pic from "../images/triple (1).png";
const Fifthsec = () => {
  return (
    <div className=" w-full pt-[40px] pb-[100px] md:pb-[100px] bg-slate-200 md:pt-[150px]">
      <div className="max-w-[1240px] md:grid grid-cols-3   gap-10 mx-auto ">
        <div className="w-full shadow-xl m-auto justify-center text-center  uppercase py-[50px] hover:scale-105 duration-300">
          <img className="w-[80px] mt-[3px] mx-auto " src={pic}></img>
          <h1 className="text-4xl pt-[50px]">single user</h1>
          <p className="text-bold pt-[40px]  text-black text-4xl font-bold">
            $149
          </p>
          <div className="text-center py-[5px]  text-black">
            <p className="py-[10px] font-bold  text-black mb-[2px]">
              1 granted user
            </p>
            <p className="py-[10px] font-bold  text-black  mb-[2px]">
              500gb storage
            </p>
            <p className="py-[5px] font-bold  text-black mb-[2px]">
              send up t0 1gb{" "}
            </p>
            <div className="m-auto pb-[10px] ">
              <button className="bg-red-400 mx-auto mt-3 text-center border rounded-md text-white px-[30px]  py-[5px]">
                Explore
              </button>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="w-full shadow-xl m-auto mt-100 justify-center text-center uppercase md:py-[60px] pt-[100px] bg-white  hover:scale-105 duration-300">
          <img className="w-[80px] mt-[3px] mx-auto " src={pic}></img>
          <h1 className="text-4xl pt-[50px]">single user</h1>
          <p className="text-bold pt-[40px] text-black text-4xl font-bold">
            $149
          </p>
          <div className="text-center py-[5px]   ">
            <p className="py-[10px] font-bold  text-black mb-[2px]">
              1 granted user
            </p>
            <p className="py-[10px] font-bold  text-black mb-[2px]">
              500gb storage
            </p>
            <p className="py-[5px] font-bold  text-black  mb-[2px]">
              send up t0 1gb{" "}
            </p>
            <div className="m-auto pb-[10px]">
              <button className="bg-red-400 mx-auto mt-3 text-center border rounded-md text-white px-[30px] md: py-[5px]">
                Explore
              </button>
            </div>
          </div>
        </div>
        {/*Third card  */}
        <div className="w-full shadow-xl m-auto justify-center text-center uppercase py-[50px] hover:scale-105 duration-300">
          <img className="w-[80px] mt-[3px] mx-auto " src={pic}></img>
          <h1 className="text-4xl pt-[50px]  text-black">single user</h1>
          <p className="text-bold pt-[40px] text-black text-4xl font-bold">
            $149
          </p>
          <div className="text-center py-[5px] ">
            <p className="py-[10px] font-bold  text-black  text-blackmb-[2px]">
              1 granted user
            </p>
            <p className="py-[10px] font-bold  text-black mb-[2px]">
              500gb storage
            </p>
            <p className="py-[5px] font-bold   text-black mb-[2px]">
              send up t0 1gb{" "}
            </p>
            <div className="m-auto pb-[10px]">
              <button className="bg-red-400 mx-auto mt-3 text-center border rounded-md text-white px-[30px] py-[5px]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthsec;
