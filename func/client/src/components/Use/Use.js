import React from "react";
import "./Use.css";
import bgUser from "../../assets/use-bg.png";
import float3 from "../../assets/float-3.png";
import use1 from "../../assets/use-1.png";
import use2 from "../../assets/use-2.png";
import use3 from "../../assets/use-3.png";
import setting from "../../assets/use-setting.png";

const Use = () => {
  return (
    <div className="bg-use pb-20 pt-24">
      <h1 className="text-center use-title">Who can use it ?</h1>
      <p className="lg:mx-96 mx-10 text-center mt-10">
        FUNc is perfect for fitness enthusiasts of all levels who want a safe
        and convenient way to work out at home. Its versatility replaces bulky
        and expensive gym equipment, making it accessible for everyone
      </p>

      <div className="main hidden md:block lg:block">
        <img src={bgUser} alt="" className="img-1" />
        <img src={float3} alt="" className="img-2" />
      </div>

      <div className="lg:mt-[-200px] md:mt-[-200px] mt-10 img-1">
        <div className="flex justify-center mx-10">
          <div className="flex gap-24 items-center flex-col lg:flex-row md:flex-row">
            <div className="text-center">
              <img src={use1} alt="" className="w-40 mx-auto" />
              <p className="flex lg:justify-start md:justify-start justify-center use-para mt-5 lg:mt-0 md:mt-0">
                KIDS
              </p>
            </div>
            <div className="text-center">
              <img src={use2} alt="" className="w-40 mx-auto" />
              <p className="flex lg:justify-start md:justify-start justify-center use-para mt-5 lg:mt-0 md:mt-0">
                ADULTS
              </p>
            </div>
            <div className="text-center">
              <img src={use3} alt="" className="w-40 mx-auto" />
              <p className="flex lg:justify-start md:justify-start justify-center use-para mt-5 lg:mt-0 md:mt-0">
                SENIORS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <div
          tabIndex={0}
          className="badge1  border border-base-300 bg-base-100 rounded-box w-80 img-3 hidden lg:block"
        >
          <div className="collapse-title text-xl font-medium flex gap-5">
            <img src={setting} alt="" className="w-10" />
            <p className="text-sm flex justify-center items-center">
              You can get a custom program for yourself.
            </p>
          </div>
        </div>
      </div> */}

      <div className="block">
        <div className="flex justify-center mt-12 ">
          <div
            tabIndex={0}
            className="border border-base-300 bg-base-100 rounded-box w-80 "
          >
            <div className="collapse-title text-xl font-medium flex gap-5">
              <img src={setting} alt="" className="w-10" />
              <p className="text-sm flex justify-center items-center">
                You can get a custom program for yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
