import DonationForm from "./DonationForm";
import { Container } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter } from "react-router-dom";

const stripePromise = loadStripe("pk_test_mmacZin7tVuUu56i31qV6g7q00vRNM02Cb");
//show different methods that we can use for stripePromise

function FrontPage() {
  return (
    <div>
      <h1>Welcome to Guan Gong Temple USA</h1>
      <br />
      <Container>
        <Elements stripe={stripePromise}>
          <DonationForm />
        </Elements>
      </Container>
      <br />
    </div>
  );
}

export default FrontPage;
