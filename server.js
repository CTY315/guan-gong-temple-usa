require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

//this is a secret key, please use .gitignore
const Stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

//for cors error
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.send("hello");
  // res.sendFile(path.join(__dirname, "public", "index.html"));
});

//get the form data
app.post("/donate", async (req, res) => {
  const { amount, email } = req.body;
  console.log(email, "in express server");
  try {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount,
      currency: "usd",
      receipt_email: email,
    });

    // console.log(paymentIntent);
    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("app is listening at port 5000");
});
