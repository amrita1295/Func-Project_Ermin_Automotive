import React from "react";
import "./Advisor.css";
import advisor1 from "../../../assets/advisor-1.png";
import advisor2 from "../../../assets/advisor-2.png";
import advisor3 from "../../../assets/advisor-3.png";
import advisor4 from "../../../assets/advisor-4.png";
import dot from '../../../assets/dot.png'


const Advisor = () => {
  return (
    <div className="bg-advisor pb-40">

      <h1 className="text-center advisor-title">Advisor/Investor</h1>

      <div className="flex justify-start mr-10">
          <img src={dot} alt="" className="w-16 mt-[-80px]" />
        </div>

      <div className="flex justify-center mx-8 mt-16">
        <div className="flex lg:gap-10 gap-8 items-center flex-col lg:flex-row">
          <div>
            <img src={advisor1} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Dr Shakha Gillian</h3>
            <p className="text-center w-52 advisor-desc">Leading paediatrics of US. “Top Doctor” from 2006 to 2018 by San Diego</p>
          </div>

          <div>
            <img src={advisor2} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Deepak Anand</h3>
            <p className="text-center w-52 advisor-desc">Senior leader in the edtech industry. Specialist in business management.</p>
          </div>

          <div>
            <img src={advisor3} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Dr Romanov</h3>
            <p className="text-center w-52 advisor-desc">Seniors sports scientist in US. Author of many top selling books including “Running Revolution”</p>
          </div>

          <div>
            <img src={advisor4} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Sai Krishna</h3>
            <p className="text-center w-52 advisor-desc">Leading IT profession in US, passionate about health and fitness</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Advisor;
