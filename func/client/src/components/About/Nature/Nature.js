import React from "react";
import "./Nature.css";
import img1 from "../../../assets/nature-1.png";
const Nature = () => {
  return (
    <div className="bg-nature">
      <div className="">
        <div className="hero-1 min-h-screen">
          <div className="hero-content-1 flex-col lg:flex-row-reverse">
            <img alt=""
              src={img1}
              className="lg:max-w-lg"
            />
            <div className="mx-12 lg:mx-28 md:mx-28">
              <h1 className="nature-title">Inspired by nature</h1>
              <p className="py-6 text-justify">
              We have curated our solution on the three pillars of movement, nutrition and recovery. We are integrating the same in our lifestyle to form sustainable healthy habits. Fundamental movements, real food and good sleep are the elixir we need. These sustainable healthy habits can transform an ordinary soul into a high-performing athlete, reduce the risk of injury, and take human performance to the next level. We have been fortunate to work with kids and adults to unlock the hidden potential to perform, increase athletic performance. We are invested in the kids to ensure that we care for the CAUSE. Most problems that we see as an adult result from poor habits while growing up. Our mission is to promote athletic fitness fix the problem of strength and conditioning, nutrition and recovery. We rely primarily on humans and nature to enhance human performance. Technology is just a catalyst. A health and fitness company, we are driven by a passion for improving people's health
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nature;
