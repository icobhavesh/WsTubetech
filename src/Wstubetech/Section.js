import React from "react";
import laptop from "../images/boy with  table.png";
const Section = () => {
  return (
    <div className="w-full bg-white-400 mt-2">

    
    <div className=" max-w-[1240px] py-[0px] block  mx-auto 
     md:grid grid-cols-2  ">
      <div className="col-span-1 w-[80%] m-10 mx-auto text-center ">
        <img className="w-[300px] m-auto " src={laptop} alt="" > </img>
      </div>
      <div className="text-center m-auto col-span-1 justify-center w-full">
        <h1>learn with me</h1>
        <p className="font-weight-bold m-auto text-center">
    let s do some coding and explore yourself untill<br></br> you dont get
          your dreames
        </p>
        <div>
          <p className=" w-[30%]  bg-black text-white m-auto p-[6px] ">
            Explore
          </p>
        </div>
      </div>
    </div>
    </div>
 
  );
};

export default Section;
