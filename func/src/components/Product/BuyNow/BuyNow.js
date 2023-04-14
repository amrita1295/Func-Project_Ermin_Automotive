import React from "react";
import "./BuyNow.css";
import star from "../../../assets/star.png";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import inr from "../../../assets/inr.png";
import { Link } from "react-router-dom";
import axios from "axios";
import BuyNow1 from "./BuyNow1";

let money=1;

const BuyNow = () => {

  const checkoutHandler = async (amount) => {
    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout", {
        amount
    })
    // console.log(data);

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "XTRALIVING",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#F5F5F5"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}


  return (
  
    <div>
      <BuyNow1 checkoutHandler={checkoutHandler} amount={money} />
    </div>
  );
};

export default BuyNow;
