import { instance } from "../server.mjs";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.mjs";

//generate orders
export const checkout = async (req, res) => {
 
  const options = {
    amount: Number(req.body.amount * 100), // amount in paisa
    currency: 'INR',
  };
  
  //  const order=await instance.orders.create(options);
  //  console.log(order);
  //  res.status(200).json({
  //   success:true
  //  });
  try {
    const order = await instance.orders.create(options);
    console.log(order.amount);
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
      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
      try {
        const order = await instance.orders.fetch(razorpay_order_id);

        await instance.invoices.create({
        type: 'invoice',
        // amount: Number(2),
        line_items:[
          {
            name: 'Product 1',
            description: 'Product 1 description',
            amount:  Number(req.body.amount * 100),
            currency: 'INR',
            quantity: 1,
          }
        ],
        description: 'Test invoice',
        customer: {
          name: 'Test Customer',
          email: 'amritasj.08@gmail.com',
        },
        receipt: razorpay_order_id,
      });
       console.log(razorpay_order_id);
        
      } catch (error) {
        console.log(error);
        // res.josn(500).send('Something went wrong');
      }
    } 
    else {
      res.status(400).json({
        success: false,
      });
    }
  };

