import React from "react";
import park_Guide from "../Assets/video/map_Guide.webm";

const Guide = ({ onClose }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 overflow-x-hidden overflow-y-auto z-[999] h-full w-full right-0 bg-black/20">
      <div className="profile px-10 py-5 bg-white rounded-md w-[1100px] mx-auto fixed top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-green-900 font-bold ">
            Ambardi Safari Park Map Guide
          </h2>
          <button
            onClick={onClose}
            className="bg-green-900 text-white px-3 py-1 font-bold rounded-md"
          >
            X
          </button>
        </div>
        <hr className="mt-2 mb-2 h-[2px] bg-green-950 outline-none" />

        <div className="py-5">
          <video width="1000" height="450" controls autoplay>
            <source src={park_Guide} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Guide;
