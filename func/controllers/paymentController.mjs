import { instance } from "../server.mjs";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.mjs";

//generate orders
export const checkout = async (req, res) => {
 
  const options = {
    amount: Number(req.body.amount)*100, // amount in paisa
    currency: 'INR',
    notes:{
      name:req.body.name1,
      email:req.body.email1
    }
 
  };
  try {
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
     })
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};

export const paymentVerification = async (req, res) => {

  
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
  
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
      .update(body.toString())
      .digest("hex");
  
    const isAuthentic = expectedSignature === razorpay_signature;
  
    if (isAuthentic) {

      // Database comes here

      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
     
      const order = await instance.orders.fetch(razorpay_order_id);
      // console.log(order,"yes")
      // console.log(order.notes.email)
      // console.log(order.notes.name)
      // console.log(order.amount)

      const options = {
        type: 'invoice',
        // customer_details: {
        //   customer_name: order.notes.name,
        //   customer_email: order.notes.email,
        // },
        line_items:[
          {
            name: 'Product 1',
            description: 'Product 1 description',
            amount_paid:Number(order.amount)*100,
            currency: 'INR',
            quantity: 1,
          }
          
        ],
        description: 'Test invoice',
        customer: {
         name:order.notes.name,
         email:order.notes.email
        },
        date: Math.floor(Date.now() / 1000),
        receipt: razorpay_order_id
      };
      try {
        const invoice = await instance.invoices.create(options);
        res.status(200).json({
          success: true,
          invoice,
          
          
         })
      } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
      }
}
    else {
      res.status(400).json({
        
        success: false,

      });
    }
 

  };
