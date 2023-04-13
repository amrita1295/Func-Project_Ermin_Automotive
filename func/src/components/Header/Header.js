import React from "react";
import Label4 from "../../assets/Label4.png";
import Photos from "../../assets/Photos.png";
import dots1 from "../../assets/dots1.png";
import rectangle from "../../assets/Rectangle 8.png";
import image2 from "../../assets/Image2.png";
import image3 from "../../assets/Image3.png";
import image4 from "../../assets/Image4.png";
import dots2 from "../../assets/dots2.png";
import dottedLine from "../../assets/dottedLine.png";
import headerImage from "../../assets/Header.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="bg-header pt-24">
      <div className="flex flex-row ">
               <div className="flex flex-col lg:mt-28 md:mt-9 lg:ml-40 md:ml-5 lg:w-1/3 md:w-[43%] ml-5 mt-7  font-extrabold margin-l ">
                    <p className="lg:text-5xl md:text-2xl text-[0.5rem] ">be <span className="text-[#B20149] ">FUNc</span>tionaly fit...</p>
                    <p className="lg:text-2xl md:text-sm text-[0.45rem] ">start with just 5 min daily</p>
                    <div className="bg-[#121942] rounded text-white md:text-[12px] lg:mt-8 md:mt-10 lg:w-44 lg:p-3 md:p-3 md:w-52 
                    text-center lg:text-2xl button w-24 mt-3 text-[0.5rem]">Know more</div>
                </div>
                <img className="lg:w-[60%] md:w-[56%] md:-ml-5 w-[60%]" src={headerImage} />
            </div>
           
            <div className="flex flex-row lg:w-80  lg:-mt-20 md:w-72 md:-mt-12 md:ml-6 lg:ml-40 w-52 -mt-6 ml-4 div-l">
                <img className="photos md:w-24 md:h-10 lg:w-28 w-9 h-4" src={Photos} alt="" />
                <h5 className="lg:mt-4  md:mt-4 lg:text-[1em] font-semibold text-[0.4em] text-[#FD8C69] " >JOIN OUR COMMUNITY</h5>
            </div>
            
           <img className="lg:ml-16 lg:-mt-56 lg:w-16 w-9 absolute" src={dots1} />
           
           <div className="relative" >
            <img className="lg:h-44 lg:w-44 absolute lg:mr-72 md:mr-36 md:-mt-11 right-0 end-0 md:h-28 md:w-28 h-9 w-10 mr-28 -mt-5 label4" src={Label4} />
                <img className="lg:-mt-3 md:-mt-4 -mt-2 rect" src={rectangle} alt=""></img>
                <img className="absolute left-0 top-0 start-36 lg:mt-8 lg:w-72 md:w-48 md:-ml-24 w-16 -ml-32 mt-5 image2" src={image2} alt=""></img>

                <div className="lg:absolute lg:start-48  lg:top-96 lg:ml-72  md:-mt-56 md:ml-64 lg:w-[50%] md:w-[60%] 
                 w-[75%] ml-20 -mt-28 div-section ">
                    <p className="font-semibold text-white md:text-lg lg:text-xl text-[0.6em] ">Functional fitness involves exercises replicating daily activities or sports to enhance overall
                        wellness and quality of life.</p><br />
                    <p className="text-[#A0A0A0] text-[0.5em] -mt-6 lg:text-xl md:text-lg">Improving joint health, mobility, balance, coordination, and strength enables individuals to perform
                        everyday tasks more efficiently and lowers the risk of injuries.</p>
                </div>

                <div className=" absolute right-0 top-0 mt-28">
                    <img className="dotted_line" src={dottedLine} alt="" />
                </div>
            </div>
            <img className="lg:ml-16 lg:mt-10 w-16 ml-3 mt-28 lg:w-24" src={dots2} />

      {/* <div className="hero-3 mb-10 lg:mb-0">
        <div className="hero-content-3 flex-col-reverse lg:flex-row-reverse">
          <img src={headerBg} alt="" className="header-pic" />
          <div>
            <div className="ml-4">
              <p className="text-3xl heading1">
                be <span className="text-[#B20149] ">FUNc</span>tionaly fit...
              </p>
              <p className="text-2xl heading2">start with just 5 min daily</p>
              <div className="bg-[#121942] rounded text-white font-normal w-36 p-2 text-center text-2xl mt-3 mb-2">
                Know more
              </div>

              <div className="flex mt-4 ">
                <img className="photos " src={Photos} alt="" />
                <h3 className="text flex items-center">JOIN OUR COMMUNITY</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-[-210px] mt-[-100px]">
        <img className=" rectangle w-full" src={rectangle} alt=""></img>
      </div> */}

      {/* <div className="flex lg:flex-row flex-col justify-evenly f-row">
        <div className="flex flex-col lg:mt-28 lg:ml-40 lg:w-1/3 font-extrabold leading-relaxed margin-l">
          <p className="text-5xl heading1">
            be <span className="text-[#B20149] ">FUNc</span>tionaly fit...
          </p>
          <p className="text-2xl heading2">start with just 5 min daily</p>
          <div className="bg-[#121942] rounded text-white font-normal lg:mt-8 lg:w-44 lg:p-3  text-center lg:text-2xl button">
            Know more
          </div>
        </div>

        <img className="w-img lg:w-96  image1" src={headerImage} alt="" />
      </div>
      <div className="absolute -mt-36 ml-44">
        <div className="flex flex-row lg:w-72 text-sm div-section lg:mt-14 lg:-ml-6">
          <img className="photos " src={Photos} alt="" />
          <h3 className="lg:mt-4 text">JOIN OUR COMMUNITY</h3>
        </div>
      </div>
      <img className="lg:ml-16 lg:-mt-36 dots-1" src={dots1} />

      <div className="relative">
        <img
          className="h-44 w-44 absolute lg:mr-72 -mt-14 right-0 end-0 label4"
          src={Label4}
        />
        <img className="lg:-mt-8 rectangle " src={rectangle} alt=""></img>
        <img
          className="absolute left-0 top-0 start-36 mt-8 image2 w-72"
          src={image2}
          alt=""
        ></img>
        <div className="lg:absolute lg:start-48 lg:top-32 lg:ml-72 lg:text-xl heading-block rec-width">
          <p className="font-bold text-white heading3">
            Functional fitness involves exercises replicating daily activities
            or sports to enhance overall wellness and quality of life.
          </p>
          <br />
          <p className="text-[#A0A0A0] heading4">
            Improving joint health, mobility, balance, coordination, and
            strength enables individuals to perform everyday tasks more
            efficiently and lowers the risk of injuries.
          </p>
        </div>
        <div className=" absolute right-0 top-0 mt-48">
          <img className="dotted_line" src={dottedLine} alt="" />
        </div>
      </div>
      <img className="lg:ml-16 lg:mt-10 dots2" src={dots2} /> */}

      {/* <div className="flex flex-row justify-evenly pt-24">
        <div className="flex flex-col mt-28 ml-10 font-extrabold leading-relaxed margin-l">
          <p className="text-5xl heading1">
            be <span className="text-[#B20149] ">FUNc</span>tionaly fit...
          </p>
          <p className="text-2xl heading2">start with just 5 min daily</p>
          <div className="bg-[#121942] rounded text-white font-normal mt-20 w-48 lg:p-4  text-center text-2xl button">
            Know more
          </div>
        </div>
        <img className="h-44 w-44 absolute ml-20 label1" src={Label1} alt="" />
        <img
          className="h-24 w-48 absolute ml-20 lg:mt-72 movement"
          src={Movement}
          alt=""
        />
        <img className="w-100 -ml-20  image1" src={image} alt="" />
        <img
          className="h-52 w-52 absolute right-0 end-0 lg:mr-32 label2"
          src={Label2}
          alt=""
        />
        <img
          className="h-52 w-52 absolute ml-20 right-0 end-0 lg:mr-32 mt-48  label3"
          src={Label3}
          alt=""
        />
      </div>
      <div className="absolute -mt-36 ml-44">
        <div className="flex flex-row lg:w-72 text-sm div-section">
          <img className="photos " src={Photos} alt="" />
          <h3 className="lg:mt-4 join-text">JOIN OUR COMMUNITY</h3>
        </div>
      </div>
      <img className="lg:ml-16 lg:-mt-36 dots-1" src={dots1} alt="" />

     

      <div className="relative">
        <img
          className="h-44 w-44 absolute lg:mr-72 -mt-14 right-0 end-0 label4"
          src={Label4}
          alt=""
        />
        <img className="lg:-mt-16 rectangle" src={rectangle} alt=""></img>
        <img
          className="absolute left-0 top-0 start-36 mt-8 image2"
          src={image2}
          alt=""
        ></img>
        <div className="absolute lg:start-52  lg:w-1/2  lg:top-32 lg:ml-72 lg:text-xl heading-block">
          <p className="font-bold text-white heading3">
            Functional fitness involves exercises replicating daily activities
            or sports to enhance overall wellness and quality of life.
          </p>
          <br />
          <p className="text-[#A0A0A0] heading4">
            Improving joint health, mobility, balance, coordination, and
            strength enables individuals to perform everyday tasks more
            efficiently and lowers the risk of injuries.
          </p>
        </div>
        <div className=" absolute right-0 top-0 mt-48">
          <img className="dotted_line" src={dottedLine} alt="" />
        </div>
      </div>
      <img className="lg:ml-16 lg:mt-10 dots2" src={dots2} alt="" /> */}

      {/* group photo */}
      {/* <div className="relative justify-items-center lg:ml-96 lg:-mt-52 group-photo">
                <img  src={image3} alt="" className="absolute lg:w-1/3 -lg:mt-4 lg:ml-14 image3" />
                <img src={image4} alt="" className="absolute lg:w-1/2 lg:mt-36 image4" />
                <div className="bg-[#121942] rounded text-white font-normal lg:mt-96 lg:ml-96 lg:w-48 lg:p-4 text-center lg:text-2xl absolute button-2">Buy Now</div> 
            </div> */}

      <div className="">
        <div className="main-1 flex justify-center top-[-100px] ">
          <img src={image4} alt="" className="image-1 w-[40rem]" />
          <img src={image3} alt="" className="image-2 w-[18rem] top-[-70px]" />
        </div>
      </div>

      <div className="lg:block md:block hidden">
        <div className="flex justify-end mt-[-220px] mr-[100px] lg:max-w-screen-lg">
          <button className="btn bg-[#121942] w-36">Buy Now</button>
        </div>
      </div>

      <div className="lg:hidden md:hidden block">
        <div className="flex justify-center">
          <button className="btn w-36 bg-[#121942]">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
