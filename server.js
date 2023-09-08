require("dotenv").config();
const express = require("express");
const app = express();

//this is a secret key, please use .gitignore
let Stripe;
if (process.env.NODE_ENV === "production") {
  Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
} else {
  Stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//for cors error
const cors = require("cors");
app.use(cors());

app.use(express.json());

//get the form data
app.post("/donate", async (req, res) => {
  // console.log(req.body);
  const { amount, email } = req.body;

  // console.log(email, "in express server");
  try {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount,
      currency: "usd",
      receipt_email: email,
    });

    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("app is listening at port 5000");
});
