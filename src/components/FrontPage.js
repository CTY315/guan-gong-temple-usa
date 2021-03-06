import DonationForm from "./DonationForm";
import { Container } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//change to test.live key for different stage
//this key is publishable 
const stripePromise = loadStripe("pk_live_JhFlMlppCNlx0AwEBHd0T7O9006HXsnDDu");
//show different methods that we can use for stripePromise

function FrontPage() {
  return (
    <div>
      <br />
      <h3>捐款 Donation to Guan Gong Temple USA</h3>
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
