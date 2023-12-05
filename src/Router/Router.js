import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageMaps from "../ImageMaps";
// import Model from "../Model/Model";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageMaps />} />
          {/* <Route path="/" element={<Model />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
