import DonationForm from "./DonationForm";
import { Container } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Button from "react-bootstrap/Button";

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
        <p style={{ padding: "0 5rem", textAlign: "left" }}>
          您好， 非常感謝閣下對關帝廟的支持。您的捐款是由Stripe公司處理，
          美國關帝廟並不會收集您的個人資料。在提交捐款後，
          您會在電子郵箱收到捐款收據。如果符合資格，該捐款可以獲得聯邦稅務減免。如果您不確定，
          請先從小數捐款開始。再次感謝您對我們的支持。謝謝。
        </p>
        <p style={{ padding: "0 5rem 2rem 5rem", textAlign: "left" }}>
          Thank you for your support to the Guan Gong Temple of USA. The
          donation transaction is securely completed by Stripe. We do not
          collect any of your personal information. You will receive a receipt
          for the donation in your email. Your donation may be qualified for a
          federal tax deduction. If you are unsure, please try a small amount to
          test it out first. Thank you again for your kind donation and support.
        </p>

        <Button
          variant="warning"
          href="https://donate.stripe.com/cN24kn5UT2hh4FyeV8"
          target="_blank"
        >
          按此捐款 Donate here
        </Button>
        <p></p>
        <h5>OR</h5>
        <td />

        <h5>Zelle to account: GGTOUSA@gmail.com</h5>
      </Container>
      <br />
    </div>
  );
}

export default FrontPage;
