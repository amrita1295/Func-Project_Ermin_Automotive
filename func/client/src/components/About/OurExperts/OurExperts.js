import React from "react";
import "./OurExperts.css";
import dot from "../../../assets/expert-dot.png";
import expert1 from '../../../assets/expert-1.png'
import expert2 from '../../../assets/expert-2.png'
import expert3 from '../../../assets/expert-3.png'
import expert4 from '../../../assets/expert-4.png'



const OurExperts = () => {
  return (
    <div className="bg-ourExperts pb-24 pt-16" style={{
        backgroundImage: `url("https://i.ibb.co/KK0j34r/float-7.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40% 30%",
      }}>
      <h1 className="text-center ourExperts-title">Our Experts</h1>

      <div className="flex justify-end mr-10">
        <img src={dot} alt="" className="w-16 mt-[-60px]" />
      </div>

      <div className="flex justify-center mx-8 mt-8">
        <div className="flex lg:gap-10 gap-8 items-center flex-col lg:flex-row">
          <div>
            <img src={expert1} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Rishikesh kumar</h3>
            <p className="text-center w-52 advisor-desc">
             
            </p>
          </div>

          <div>
            <img src={expert2} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Dr. Ravi Teja</h3>
            <p className="text-center w-52 advisor-desc">
             
            </p>
          </div>

          <div>
            <img src={expert3} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Dr Kalayn</h3>
            <p className="text-center w-52 advisor-desc">
              
            </p>
          </div>

          <div>
            <img src={expert4} alt="" className="w-52" />
            <h3 className="advisor-name mb-2">Dr Vinay</h3>
            <p className="text-center w-52 advisor-desc">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
