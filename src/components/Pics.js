import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import picTwo from "../images/IMG_9612.JPG";
import picThree from "../images/IMG_9613.JPG";
import picFour from "../images/IMG_9614.JPG";
import picFive from "../images/IMG_9615.JPG";
import picSix from "../images/IMG_9616.JPG";
import picSeven from "../images/IMG_9617.JPG";

class Pics extends Component {
  render() {
    return (
      <div style={{ padding: "20px 5% 20px 5%" }}>
        <Container>
          <Row>
            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://fastly.4sqi.net/img/general/600x600/79385836_AUfP-aCmUvZuAOZB7b8Sdifx_BA5nXk67eex-TQheXM.jpg"
                />
              </Card>
            </Col>

            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={picTwo} />
              </Card>
            </Col>
            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={picThree} />
              </Card>
            </Col>
            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={picFour} />
              </Card>
            </Col>
            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={picFive} />
              </Card>
            </Col>
            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={picSix} />
              </Card>
            </Col>
            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={picSeven} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Pics;
