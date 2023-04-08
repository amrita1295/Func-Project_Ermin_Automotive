import React from "react";
import "./Associations.css";
import association1 from "../../assets/associations-1.png";
import association2 from "../../assets/associations-2.png";
import association3 from "../../assets/associations-3.png";
import association4 from "../../assets/associations-4.png";
import association5 from "../../assets/associations-5.png";
import association6 from "../../assets/associations-6.png";
import association7 from "../../assets/associations-7.png";
import association8 from "../../assets/associations-8.png";
import association9 from "../../assets/associations-9.png";
import association10 from "../../assets/associations-10.png";
import dot from "../../assets/dot.png";

const Associations = () => {
  return (
    <div className="bg-association pb-20">
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co/hcDDtNR/float.png")`,
        }}
      >
        <h1 className="text-center association-title">Our Associations</h1>

        <div className="flex justify-end mr-10">
          <img src={dot} alt="" className="w-16" />
        </div>

        <div className="flex justify-center mx-8">
          <div className="flex lg:gap-20 gap-8 items-center flex-col-reverse lg:flex-row">
            <div>
              <img src={association1} alt="" className="w-32" />
            </div>
            <div>
              <img src={association2} alt="" className="w-32" />
            </div>
            <div>
              <img src={association3} alt="" className="w-32" />
            </div>
            <div>
              <img src={association4} alt="" className="w-32" />
            </div>
            <div>
              <img src={association5} alt="" className="w-32" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-8 mt-10">
          <div className="flex lg:gap-8 gap-8 items-center flex-col-reverse lg:flex-row">
            <div>
              <img src={association6} alt="" className="w-32" />
            </div>
            <div>
              <img src={association7} alt="" className="w-32" />
            </div>
            <div>
              <img src={association8} alt="" className="w-32" />
            </div>
            <div>
              <img src={association9} alt="" className="w-32" />
            </div>
            <div>
              <img src={association10} alt="" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associations;
