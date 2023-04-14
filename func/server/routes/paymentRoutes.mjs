import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.mjs";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

// router.route("/invoices").post(invoices);

export default router;