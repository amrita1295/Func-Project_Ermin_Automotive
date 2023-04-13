import React from "react";
import "./BuyNow.css";
import star from "../../../assets/star.png";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import inr from "../../../assets/inr.png";
import { Link } from "react-router-dom";
const BuyNow = () => {
  return (
    <div className="buy-bg pb-24">
      <div className="pb-10 w-3/4 mx-auto bg-white rounded-[40px]">
        <h1 className="text-center text-[#B20149] font-extrabold text-[40px] pt-3">
          FUNc
        </h1>

        <div className="flex justify-center mt-5 gap-3">
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

        <div className="mt-8 flex ml-8 gap-2">
          <img src={inr} alt="" className="" />
          <span className="text-[#B20149] font-semibold">6562</span>
        </div>

        <div className="bg-culture pb-16 mt-6">
          {/* <h2 className="text-white text-center text-4xl pb-8 pt-16">
          OUR CULTURE
        </h2> */}
          <div className="w-full px-8 sm:px-0">
            <Tab.Group>
              <div className="max-w-xl lg:ml-8 ml-0 md:ml-7">
                <Tab.List className="flex space-x-2 rounded-xl p-1 justify-start">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                        selected ? "bg-[#121942] text-white" : " text-black"
                      )
                    }
                  >
                    Description
                  </Tab>

                  <span className="text-black inline-block mt-2">|</span>

                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                        selected ? "bg-[#121942] text-white  " : " text-black"
                      )
                    }
                  >
                    Specification
                  </Tab>
                  <span className="text-white inline-block mt-2">|</span>
                  <span className="text-white inline-block mt-2">|</span>
                </Tab.List>
              </div>

              <div className="lg:px-10 md:px-8 px-2">
                <Tab.Panels className="mt-8">
                  <Tab.Panel className="">
                    <div className="w-full">
                      <p className="text-black text-justify">
                        Being healthy should be the norm. We are on a mission to
                        help build sustainable healthy habits for kids and
                        adults by focusing on movement, nutrition and recovery.
                        FUNc is perfect for fitness enthusiasts of all levels
                        who want a safe and convenient way to work out at home.
                        Its versatility replaces bulky and expensive gym
                        equipment, making it accessible for everyone.
                      </p>
                    </div>
                  </Tab.Panel>

                  <Tab.Panel className="">
                    <div className="w-full">
                      <p className="text-black text-justify">
                        Lorem ipsum dolor sit amet consectetur. Fermentum
                        lobortis est eget consectetur amet nunc ut aliquet
                        porttitor. Interdum massa diam adipiscing porta eget
                        amet tellus sed. Augue amet ridiculus suspendisse eu
                        metus fringilla posuere egestas.lol
                      </p>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>

        <div>
          <Link to={"/payment"}>
            <button className="flex justify-center bg-[#121942] text-white w-80 mx-auto p-3 rounded-xl">
              Buy Now
            </button>
          </Link>
        </div>

        <div>
          <button className="flex justify-center mt-6 bg-[white] text-[#B20149] w-80 mx-auto p-3 rounded-xl border-[#B20149] border">Add To Cart</button>
        </div>

      </div>
    </div>
  );
};

export default BuyNow;
