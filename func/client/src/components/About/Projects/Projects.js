import React from "react";
import project from "../../../assets/project-1.png";
import dot from '../../../assets/project-dot.png'


const Projects = () => {
  return (
    <div className="bg-nature">

      <div className="flex justify-center">
        <img src={dot} alt="" className="w-20" />
      </div>

      <div className="">
        <div className="hero-1 min-h-screen">
          <div className="hero-content-1 flex-col lg:flex-row">
            <img alt="" src={project} className="lg:max-w-lg" />
            <div className="mx-12 lg:mx-28 md:mx-28">
              <h1 className="nature-title text-right">Projects to make an impact at scale.</h1>
              <p className="py-6 text-right">
              Initiated and conducted Go Girl Go campaign with Govt. of Maharashtra to encourage 12 million girl students to participate in sports. Conducted eNERGIZE Quiz and Fitness competition with Dept of Sports, Maharashtra; 35k+ students participated. Trained 10000+ individuals, including olympic athletes, to improve strength and conditioning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mr-28">
        <img src={dot} alt="" className="w-20" />
      </div>
    </div>
  );
};

export default Projects;
