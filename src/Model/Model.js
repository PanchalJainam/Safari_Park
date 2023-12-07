import React from "react";
import "./model.css";

const Model = ({ modelVal, onClose }) => {
  console.log(modelVal);
  const val = modelVal;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 overflow-x-hidden overflow-y-auto z-[999] h-full w-full  bg-black/20">
      <div className="park-popup bg-white md:w-[650px] w-[400px] md:h-[420px] h-[250px]">
        <div className="flex justify-between font-bold items-center">
          <h2 className="text-green-900 text-sm md:text-2xl">
            Ambardi Safari Park
          </h2>
          <button
            onClick={onClose}
            className="bg-green-900 text-white px-2 py-[3.5px]  text-[10px] md:text-[14px] rounded-md"
          >
            X
          </button>
        </div>
        <hr className="mb-2 h-[2px] bg-green-950 outline-none" />

        <div className="">
          <img
            src={`${val}`}
            className="md:w-[650px] md:h-[350px] w-[400px] h-[200px]"
            alt=""
          />
        </div>
      </div>
    </div>
    // <div className="fixed top-0 bottom-0 left-0 overflow-x-hidden overflow-y-hidden z-[999] h-full w-full right-0 bg-black/20">
    //   <div className="md:block hidden px-8 py-5 bg-white rounded-md md:w-[800px] fixed top-[430px] left-1/2 -translate-x-1/2 -translate-y-1/2">
    //     <div className="flex justify-between items-center">
    //       <h2 className="text-3xl text-green-900 font-bold ">
    //         Ambardi Safari Park
    //       </h2>
    //       <button
    //         onClick={onClose}
    //         className="bg-green-900 text-white px-3 py-1 font-bold rounded-md"
    //       >
    //         X
    //       </button>
    //     </div>
    //     <hr className="mt-2 mb-2 h-[2px] bg-green-950 outline-none" />

    //     <div className="py-2">
    //       <img
    //         src={`${val}`}
    //         alt="park"
    //         className="w-auto h-[450px] rounded-sm mx-auto"
    //       />
    //     </div>
    //   </div>

    //   {/* ---------------------------------------- RESPONSIVE DESIGN CODE ------------------------------------*/}

    //   <div className="md:hidden block  top-36  bottom-1/2 sticky bg-white w-[350px] h-[260px] mx-auto p-2 rounded-sm ">
    //     <div className="flex justify-between font-bold items-center">
    //       <h2 className="text-green-900">Ambardi Safari Park</h2>
    //       <button
    //         onClick={onClose}
    //         className="bg-green-900 text-white px-2 py-[3.5px] text-[10px] rounded-md"
    //       >
    //         X
    //       </button>
    //     </div>
    //     <hr className="mb-2 h-[2px] bg-green-950 outline-none" />

    //     <div className="">
    //       <img
    //         src={`${val}`}
    //         className="w-[100%] h-[210px]"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Model;
