import React from "react";
import "./BuyNow.css";
import axios from "axios";
import BuyNow1 from "./BuyNow1";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";


let money=1;

const BuyNow = () => {
  const { user } = useContext(AuthContext);
  const name1=user?.displayName
  const email1=user?.email
  
 

  const checkoutHandler = async (amount) => {
    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")
    console.log({key})
  
    //response is stored in order
    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout", {
        amount,
        name1,
        email1
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "XTRALIVING",
        description: "Invoice",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name:name1,
            email:email1,
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
      <BuyNow1 checkoutHandler={checkoutHandler} amount={money}  />
    </div>
  );
};

export default BuyNow;
