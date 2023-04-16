import React from "react";
import "./Work.css";
import work1 from "../../assets/2.png";
import work2 from "../../assets/work-bg-2.png";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="bg-work pt-24">
      <h1 className="text-center work-title">How dose it work</h1>

      <div className="main">
        <div className="flex justify-center work-1">
          <Link to="https://www.youtube.com/watch?v=6UZds0GJxKI&t=2s" alt="" target="_blank">
            <img src={work2} alt="" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-[-30px]">
        <img src={work1} alt=""  className="work-pic"/>
      </div>
    </div>
  );
};

export default Work;
