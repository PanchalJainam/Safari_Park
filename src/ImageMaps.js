import React, { useEffect, useState } from "react";
import river from "./Assets/river.jpg";
import Model from "./Model/Model";
import Guide from "./Model/Guide";

const ImageMaps = () => {
  const [model, setModel] = useState(false);
  const [modelVal, setModelVal] = useState(null);

  const [guide, setGuide] = useState(false);
  const park_Map =
    "https://res.cloudinary.com/dr9kijcga/image/upload/v1701152344/You_are_here_map_final_08-11-2023_online_spt2m1.jpg";

  const closePopup = () => {
    setModel(false);
    setGuide(false);
  };

  const handleModel = (val) => {
    setModelVal(val);
    setModel(true);
  };

  // const greetings = () => {
  //   alert("hello");
  // };

  useEffect(() => {
    setGuide(false);
  }, []);

  return (
    <>
      <div className="relative main_div w-[1555px] overflow-x-scroll md:overflow-x-hidden">
        <img
          src={park_Map}
          alt="safari_park"
          className="w-[1555px] h-[700px] "
          useMap="#park"
        />

        {/* 1 */}

        <div className="div_2 absolute top-[380px] right-[284px] border-2 z-10 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[378px]  right-[282px] bg-orange-600 w-[16px] h-[16px] rounded-full"></div>

        {/* <div className="div_2 absolute top-[360px] right-[335px] w-[15px] h-[15px] rounded-full"></div> */}
        {/* <div className="div_1 absolute top-[360px] right-[335px]  w-[15px] h-[15px] rounded-full"></div>  */}

        {/* 2 */}
        <div className="div_2 absolute top-[362px] right-[337px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[360px] right-[335px] w-[16px] h-[16px] rounded-full">
          {/* <i class="ri-map-pin-fill text-white text-4xl"></i> */}
        </div>
        {/* 3 */}
        <div className="div_2 absolute top-[342.5px] right-[444px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[340px] right-[442px] bg-orange-600  w-[16px] h-[16px] rounded-full"></div>
        {/* 4 */}
        <div className="div_2 absolute top-[317.5px] right-[512px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[315px] right-[510px] bg-orange-600 w-[16px] h-[16px] rounded-full"></div>
        {/* 5 */}
        <div className="div_2 absolute top-[316px] right-[530px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[314px] right-[528px] bg-orange-600  w-[16px] h-[16px] rounded-full"></div>
        {/* 6 */}
        <div className="div_2 absolute top-[360.5px] right-[537px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[358px] right-[535px]  w-[16px] h-[16px] bg-orange-600  rounded-full"></div>
        {/* 7 */}
        <div className="div_2 absolute top-[372px] right-[566.5px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[370px] right-[565px] w-[16px] h-[16px] bg-orange-600  rounded-full"></div>
        {/* 8 */}
        <div className="div_2 absolute top-[347px] right-[582px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[345px] right-[580px] w-[16px] h-[16px] bg-orange-600  rounded-full"></div>
        {/* 9 */}
        <div className="div_2 absolute top-[357px] right-[607px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[355px] right-[605px] w-[16px] h-[16px] bg-orange-600  rounded-full"></div>
        {/* 10 */}
        <div className="div_2 absolute top-[362px] right-[632px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[360px] right-[630px] w-[16px] h-[16px] bg-orange-600  rounded-full"></div>
        {/* 11 */}
        <div className="div_2 absolute top-[382px] right-[622px] border-2 z-10 bg-orange-600 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[380px] right-[620px] w-[16px] h-[16px] bg-orange-600  rounded-full"></div>
        {/* 12 */}
        <div className="div_2 absolute top-[302px] right-[712px] border-2 z-10 border-white w-[12px] h-[12px] rounded-full"></div>
        <div className="div_1 absolute top-[300px] right-[710px] bg-orange-600 w-[16px] h-[16px] rounded-full"></div>
        {/* 13 */}
        <div className="div_2 absolute top-[366px] right-[802px] border-2 z-10 bg-orange-600 border-white w-[10px] h-[10px] rounded-full"></div>
        <div className="div_1 absolute top-[364px] right-[800px] w-[14px] h-[14px] bg-orange-600  rounded-full"></div>

        <map name="park">
          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="1236,382,1270,365,1281,384,1257,398"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701156944/IMG20231008081809_01_kzpe5c.jpg"
              )
            }
            alt="image1"
            className="absolute cursor-pointer"
          />

          {/* image 12 */}
          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="799,304,847,257,929,303,863,330"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701156248/family_fklxkl.jpg"
              )
            }
            alt="image1"
            className="absolute cursor-pointer"
          />

          {/*----------------------------------- below Lion and Lioness statue--------------------- */}

          <area
            shape="rect"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="922,382,932,389"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701152591/Lion_and_Lioness_Fibre_Modal_jyswbo.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          {/*----------------------------------- below Silver Deer statue--------------------- */}

          <area
            shape="rect"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="1005,355,1018,366"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701152571/Deer_Male-Female_nwnrtn.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          {/*----------------------------------- below three Silver lion statue--------------------- */}

          <area
            shape="poly"
            coords="954,347,980,347,980,357,954,354"
            // coords="966,350,977,357"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701154343/SS_standing_Lion_01_ghdzqd.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="929,358,948,353,956,365,937,372"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701153180/SS_Sitting_Lion_mku0qv.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="907,362,926,360,930,370,905,374"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701154357/SS_Standing_Lioness_wg0ffb.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          <area
            shape="rect"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="702,277,715,286"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701152582/SS_Big_Lion_fkax4g.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          {/*----------------------------------- below two lion white statue--------------------- */}

          {/* image 2 */}
          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="1193,361,1225,365,1224,382,1203,382"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701160860/P1035939_e4eci0.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="1029,332,1045,332,1045,340,1029,340"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701160799/P1035866_right_side_rjd3ii.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />
          <area
            shape="rect"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="1018,329,1025,338"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701160807/P1035866_Left_side_pjlxsi.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />
          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="1095,343,1120,348,1120,355,1095,353"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701164912/interpretation_tbe5f1.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          <area
            shape="rect"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="725,291,734,298"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701164818/20231124_113813_brr46v.jpg"
              )
            }
            alt="image1"
            className="absolute cursor-pointer"
          />

          <area
            shape="rect"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="713,286,722,290"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701164818/20231124_113813_brr46v.jpg"
              )
            }
            alt="image1"
            className="absolute cursor-pointer"
          />

          {/*----------------------------------- below Lion and Lioness seating statue--------------------- */}

          <area
            shape="rect"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="976,331,986,378"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701161035/Fibre_Sitting_lion_wv8oqv.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />

          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            coords="729,378,742,359,771,369,772,385"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701164335/Final_q8m6ta.jpg"
              )
            }
            alt="image1"
            className="absolute  cursor-pointer"
          />
        </map>
      </div>

      {/* ---------------------------------------- RESPONSIVE DESIGN  CODE ------------------------------------*/}

      {/* <div className="md:hidden block relative w-[360px] h-[680px] bg-gray-400 ">
        <img
          src={river}
          alt=""
          useMap="#park2"
          className=" w-[360px] h-[680px]"
        />
        <p className="font-bold text-center pt-4 text-4xl text-gray-300">
          {" "}
          360 X 680
        </p>
        <div className="absolute top-40 bottom-1/2 bg-white w-[320px] h-[300px] p-2 rounded-md">
          <div className="flex justify-between font-bold">
            <h2 className="text-green-900">Ambardi Safari Park</h2>
            <button>X</button>
          </div>
          <hr className="mb-2 h-[2px] bg-green-950 outline-none" />

          <div className="bg-gray-200">
            <img
              src="https://res.cloudinary.com/dr9kijcga/image/upload/v1701161035/Fibre_Sitting_lion_wv8oqv.jpg"
              alt=""
              className="w-[100%] h-[250px]"
            />
          </div>
        </div>
        <map name="park2">
          <area
            shape="poly"
            // coords="410,60,1120,60,1120,95,410,95"
            // coords="82,604,148,604,155,636,82,636"
            coords="3,26,326,26,326,89,3,89"
            onClick={() =>
              handleModel(
                "https://res.cloudinary.com/dr9kijcga/image/upload/v1701156944/IMG20231008081809_01_kzpe5c.jpg"
              )
            }
            alt="image1"
            className="absolute p-2 cursor-pointer"
          />
        </map>
      </div> */}

      {/* ---------------------------------------- MODEL VISIBLE CODE ------------------------------------*/}
      {model === true ? (
        <Model modelVal={modelVal} onClose={closePopup} />
      ) : (
        <></>
      )}
      {guide === true ? <Guide onClose={closePopup} /> : <></>}
    </>
  );
};

export default ImageMaps;
