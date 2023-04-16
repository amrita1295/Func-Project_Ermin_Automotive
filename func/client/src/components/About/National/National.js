import React from "react";
import "./National.css";

import dot from '../../../assets/project-dot.png'
import national from '../../../assets/national.png'

const National = () => {
  return (
    <div className="bg-national pb-20">
      <h1 className="mx-auto text-center national-title max-w-2xl text text-4xl">
        National and International collaboration to improve human performance in
        India
      </h1>

      <div className="flex justify-start ml-10 mt-6">
        <img src={dot} alt="" className="w-16" />
      </div>

      <div className="flex justify-center">
        <img src={national} alt="" />
      </div>

      <div className="flex justify-start ml-96 mt-6">
        <img src={dot} alt="" className="w-16" />
      </div>
    </div>
  );
};

export default National;
