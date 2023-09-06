import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../contact.css";

class Contact extends Component {
  render() {
    const phone = "+1 (212) 219-85861"
    return (
      <div>
        <div>
          <img
            src="https://fastly.4sqi.net/img/general/600x600/79385836_AUfP-aCmUvZuAOZB7b8Sdifx_BA5nXk67eex-TQheXM.jpg"
            alt=""
            style={{ width: "300px", paddingTop: "20px" }}
          />
        </div>
        <div style={{ padding: "50px 10% 50px 10%", margin:"auto" }}>
          <Container>
            <Row>
              <Col >
                <Card style={{ width: "20rem", height: "18rem", background:"#E09062", borderColor:"#E09062"}}>
                  <Card.Body>
                    <iframe 
                      title="address" 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.968062102097!2d-73.99450258870199!3d40.71871957127333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25987a8646a99%3A0x11887a3db48a9fa4!2z576O5ZyL6Zec5bid5bufIEd1YW4gR29uZyBUZW1wbGUgb2YgVVNB!5e0!3m2!1sen!2sus!4v1693971691152!5m2!1sen!2sus" 
                      width="90%" 
                      height="250" 
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                  </Card.Body>
                </Card>
              </Col>
            <Col style={{ padding: "1rem" }}>
              <Card  style={{ width: "20rem", height: "18rem", background:"#E09062", borderColor:"#E09062"}}>
                <Card.Body>
                  <Card.Title>Address 地址</Card.Title>
                    <Card.Text>
                      294 Broome St, New York, NY 10002
                    </Card.Text>
                
                    <Card.Title>Hours 開放時間</Card.Title>
                    <Card.Text>Monday to Friday 9am - 4pm</Card.Text>
                
                    <Card.Title>Call Us 連絡電話</Card.Title>
                    <Card.Text>{phone}</Card.Text>
                   </Card.Body>
                </Card>
              </Col>
            
              </Row>
            </Container>
        </div>
      </div>
    );
  }
}

export default Contact;
