import React from "react";
import laptop from "../images/boy with  table.png";
const Section_1 = () => {
  return (
    <div className="w-full py-[50px] md:pb-[100px] pb-[100px]">
      <div className="max-w-[1240px] md:grid grid-cols-2  m-auto">
        <div className="col-span-1 ">
          <img className=" w-[3
            00px] m-auto" src={laptop} alt=""></img>
        </div>
        <div className="col-span-1 md:mt-[110px] md:mr[200px] justify-center text-center">
          <div>
              <h1 className="font-bold text-5xl">Learn With Me</h1>
          </div>
          <div>
            <p className="text-center font-bold">
              let s do some coding and explore yourself until <br></br>you dont
              get your dreames
            </p>
          </div>
          <div className="m-auto">
            <button className="bg-purple-800 mx-auto text-center border rounded-md mt-[15px] text-white px-[30px] py-[5px]">
              Explo
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div claasName="w-full bg-blue-400 ">
    //   <div className="max-w-[1240px] p-[100px] pb-10 md:grid grid-cols-3">
    //     <div className="col-span-1  mx-auto text-center ">
    //     <img className="w-[400px] m-auto inline
    //     " src={pic}></img>
    //     </div>
    //     <div className="col-span-1 mx-auto md:flex flex-col text-center justify-center"  >
    //       <h1 className="md:text-10xl" >learn with me</h1>
    //       </div>
    //       <div >
    //         <p className="font-bold text-center w-full ">
    //         let s do some coding and explore yourself untill you dont get
    //       your dreames

    //         </p>
    //       </div>
    //       <div className="auto">
    //         <button className="  w-[-30%] bg-black p-[6px] justify-center text-center text-white">just do it </button>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Section_1;
