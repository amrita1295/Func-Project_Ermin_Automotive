import React from "react";
import "./Rishi.css";
import rishi from "../../../assets/rishi-pic.png";
import rishiSig from "../../../assets/rishi-sig-2.png";
import rishi1 from "../../../assets/rishi-1.png";
import rishi2 from "../../../assets/rishi-2.png";
import rishi3 from "../../../assets/rishi-3.png";
import rishi4 from "../../../assets/rishi-4.png";

const Rishi = () => {
  return (
    <div className="bg-rishi pb-16">
      <div className="flex justify-center pt-7">
        <img src={rishi} alt="" className="w-16" />
      </div>
      <h1 className="text-center text-2xl font-bold text-[#000000] mt-3">
        Rishikesh Kumar
      </h1>
      <p className="lg:px-96 px-6 md:px-24 mt-2 text-justify text-[#636363]">
        Rishi is a health tech entrepreneur and a performance coach. His aim
        through his innovative health tech solution and awareness programs is to
        make healthy happen. He curated and executed one of India's most
        extensive health awareness campaigns, reaching out to 12 Mn students
        across 100K schools.
      </p>
      <div className="flex justify-center">
        <img src={rishiSig} alt="" className="w-52" />
      </div>

      <div className="flex justify-center mx-10 mt-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="text-center">
            <img src={rishi1} alt="" className="w-28 mx-auto" />
            <h1 className="mt-3 text-[#000000] font-semibold">Health-Tech Entrepreneur</h1>
            <p className="text-justify mt-3">
              Rishi has been an entrepreneur since 2017, and is the founder and
              CEO of XTRALIVING. He is currently working on building an
              innovative health-tech solution. He is an electronics engineer
              from MANIT Bhopal and an MBA from KJ Somaiya Mumbai.
            </p>
          </div>
          <div className="text-center">
            <img src={rishi2} alt="" className="w-28 mx-auto" />
            <h1 className="mt-3 text-[#000000] font-semibold">Performance Coach</h1>
            <p className="text-justify mt-3">Rishi has been a consultant for Govt. of Maharashtra and Gopichand Academy as a performance improvement specialist. He has personally coached young athletes, adults and Olympic athletes. He has planned and executed a few national-level campaigns to raise health awareness. He was a consultant for setting up a few leading Hitech performances in India. Ranked 16th in India in CrossFit Games 2015</p>
          </div>
          <div className="text-center">
            <img src={rishi3} alt="" className="w-28 mx-auto" />
            <h1 className="mt-3 text-[#000000] font-semibold">Health Coach</h1>
            <p className="text-justify mt-3">He is a certified Crossfit Coach (Bangkok), Crossfit Kids Coach (Madison, USA) and Precision Nutrition (Canada). He has coached 10K plus adults and kids from corporate and schools. Rishi is actively learning about human growth and development for his twins-D&V. In return, he has been helping them with movement competencies and nutrition. He was a consultant for setting up a few leading Hitech performances in India.</p>
          </div>
          <div className="text-center">
            <img src={rishi4} alt="" className="w-28 mx-auto" />
            <h1 className="mt-3 text-[#000000] font-semibold">Business Management</h1>
            <p className="text-justify mt-3">Rishi is a business management specialist with 20+ years of experience in sales, business development and business management. He has worked in companies like Idea, Nokia, Microsoft and Xseed. Rishi has been the top sales performer in Nokia/Microsoft nationally for four years. Rishi received the Stephen Elop global mindset award for outstanding performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rishi;
