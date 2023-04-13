import React from "react";
import Believer from "../../Believer/Believer";
import News from "./../../News/News";
import Associations from "./../../Associations/Associations";
import CustomerSay from "./../../CustomerSay/CustomerSay";
import Use from "../../Use/Use";
import Work from "../../Work/Work";
import Func from "../../Func/Func";
import Header from "../../Header/Header";
import Dumbel from "../../Dumbel/Dumbel";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Func></Func>
      <Dumbel></Dumbel>
      <Work></Work>
      <Use></Use>
      <CustomerSay></CustomerSay>
      <Associations></Associations>
      <News></News>
      <Believer></Believer>
    </div>
  );
};

export default Home;
