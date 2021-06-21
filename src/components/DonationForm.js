import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

function DonationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  //use hooks provided by stripe
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsProcessing(true);
    try {

      const paymentIntent = await axios.post(
        // "/donate",
        "http://localhost:5000/donate",
        {
          amount: amount * 100,
          email: email,
        }
      );
      //paymentIntent.data is client secret
      //console.log("paymentIntent:", paymentIntent);

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);

      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: name,
          phone: phone,
          email: email,
        },
      });

      if (error) {
        setIsProcessing(false);
        window.alert("Error:" + error.message);
      } else {
        setIsProcessing(false);
        setName("");
        setPhone("");
        setEmail("");
        setAmount("");
        cardElement.clear();
        alert("Successful!Thank you.");
      }

      //confirm payment method,then we can go check dash board
      const confirmPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethod.id,
        }
      );
    } catch (err) {
      setIsProcessing(false);
      alert("Something went wrong, please try again!");
      // console.log(err);
    }
  }

  return (
    <div style={{ margin: "auto", width: "85%" }}>
      <Form onSubmit={handleSubmit} action="POST">
        <Form.Group style={{ textAlign: "start" }}>
          <Form.Label>Your Name 名字</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Name"
            value={name}
          />
        </Form.Group>
        <Form.Group style={{ textAlign: "start" }}>
          <Form.Label>Your Phone number 電話</Form.Label>
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={phone}
          />
          <small>Format: 1234567890</small>
        </Form.Group>

        <Form.Group style={{ textAlign: "start" }}>
          <Form.Label>Your Email 電郵</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Email"
            value={email}
          />
        </Form.Group>

        <Form.Group style={{ textAlign: "start" }}>
          <Form.Label>Donation Amount 捐款數目 (USD)</Form.Label>
          <Form.Control
            onChange={(e) => setAmount(e.target.value)}
            name="amount"
            type="number"
            placeholder="$ USD"
            value={amount}
          />
        </Form.Group>

        <Form.Group style={{ textAlign: "start" }}>
          <Form.Label>Your credit card detail 信用卡資料</Form.Label>
          <fieldset className="FormGroup">
            <div
              className="FormRow"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                height: "33px",
                borderColor: "grey",
                alignItems: "center",
                padding: "5px 20px 5px 20px",
              }}
            >
              <CardElement
                options={{
                  iconStyle: "solid",
                  style: {
                    base: {
                      iconColor: "#c4f0ff",
                      color: "black",
                      fontWeight: 500,
                      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                      fontSize: "16px",
                      fontSmoothing: "antialiased",
                      ":-webkit-autofill": { color: "#fce883" },
                      "::placeholder": { color: "#87bbfd" },
                    },
                    invalid: {
                      iconColor: "#ffc7ee",
                      color: "#ffc7ee",
                    },
                  },
                }}
              />
            </div>
          </fieldset>
        </Form.Group>

        <br />
        <Button
          variant="warning"
          type="submit"
          disabled={
            !name || !email || !amount || !CardElement || isProcessing === true
          }
        >
          {isProcessing === true ? "Processing..." : "Donate"}
        </Button>
      </Form>
    </div>
  );
}

export default DonationForm;
