import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

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
                <Card.Img
                  variant="top"
                  src="https://s3-media0.fl.yelpcdn.com/bphoto/MWdXUWaGj6hu39pZPUKQ9Q/o.jpg"
                />
              </Card>
            </Col>

            <Col style={{ padding: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/4fb642_7c69f1f880a54a0b8df87908e8042f68~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_784,h_523,al_c,q_90,usm_0.66_1.00_0.01/4fb642_7c69f1f880a54a0b8df87908e8042f68~mv2_d_5472_3648_s_4_2.webp"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Pics;
