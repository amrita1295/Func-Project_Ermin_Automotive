import React from "react";
import "./Highlights.css";
import highlights1 from '../../../assets/highlights-1.png'
import highlights2 from '../../../assets/highlights-2.png'
import highlights3 from '../../../assets/highlights-3.png'
import float from '../../../assets/float-2.png'


const Highlights = () => {
  return (
    <div className="bg-highlights pb-28 pt-24" style={{
        backgroundImage: `url("https://i.ibb.co/0MfSMVS/float-2.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40% 50%",
      }}>
      <h1 className="text-center highlights-title">Other Highlights</h1>

      <div className="mx-8 mt-10">
        <p className="max-w-3xl mx-auto text-justify">
          100+ national coverages by media. Finalist in 40 under 40 leaders by
          Business World 2020. Part of the team to launch an MBA in Sports in KJ
          Somaiya and provide inputs for the curriculum. Launched an app to
          improve habits for better health with 25K downloads in one month.
        </p>
      </div>


      <div className="mt-10">
        <div className="flex justify-center mx-10">
          <div className="flex gap-8 items-center flex-col lg:flex-row md:flex-row">
            <div className="text-center">
              <img src={highlights1} alt="" className="w-52 mx-auto" />
             
            </div>
            <div className="text-center">
              <img src={highlights2} alt="" className="w-52 mx-auto" />
              
            </div>
            <div className="text-center">
              <img src={highlights3} alt="" className="w-52 mx-auto" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Highlights;
