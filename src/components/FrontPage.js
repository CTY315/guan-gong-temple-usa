import DonationForm from "./DonationForm";
import { Container } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//change to test.live key for different stage
let stripePromise;
if (process.env.NODE_ENV === "production") {
  stripePromise = loadStripe("pk_live_JhFlMlppCNlx0AwEBHd0T7O9006HXsnDDu");
} else {
  stripePromise = loadStripe("pk_test_mmacZin7tVuUu56i31qV6g7q00vRNM02Cb");
}

//show different methods that we can use for stripePromise

function FrontPage() {
  return (
    <div>
      <br />
      <h3>Donation to Guan Gong Temple USA</h3>
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
