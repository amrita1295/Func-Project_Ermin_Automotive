import React from "react";
import "./CustomerSay.css";
import introVideo from "../../assets/customer-feedback.mp4";
import { DefaultPlayer } from "react-html5video";
import "react-html5video/dist/styles.css";
import star from "../../assets/star.png";
import arrow from "../../assets/Arrow.png";
import comma1 from "../../assets/comma-1.png";
import comma2 from "../../assets/comma-2.png";

const CustomerSay = () => {
  return (
    <div className="bg-color-customer">
      <div className="customer-bg">
        <div
          style={{
            backgroundImage: `url("https://i.ibb.co/0MfSMVS/float-2.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "40% 32%",
          }}
        >
          <h1 className="text-center association-title pt-24 px-10">
            What customer say about us
          </h1>
          <div className="rounded-3xl">
            <DefaultPlayer className="mx-auto mt-20 lg:w-96 w-80">
              <source
                className="rounded-3xl"
                src={introVideo}
                type="video/mp4"
              />
            </DefaultPlayer>

            <div className="flex justify-center mt-12 gap-3">
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
            </div>

            <div className="mt-16  lg:w-96 w-80 mx-auto text-justify">
              <p>
                <img src={comma1} alt="" className="inline mr-2 w-10" />
                Lorem ipsum dolor sit amet consectetur. Sit euismod libero
                dapibus eu amet ultrices etiam euismod. Quam et id facilisis
                lectus adipiscing. Lorem ipsum dolor sit amet consectetur. Sit
                euismod libero dapibus eu amet ultrices etiam euismod. Quam et
                id facilisis lectus adipiscing.
                <img src={comma2} alt="" className="inline ml-2 w-10" />
              </p>
            </div>

            <div className="flex justify-center mt-20">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
