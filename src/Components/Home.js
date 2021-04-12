import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftCol from "./LeftCol";
import MainCol from "./MainCol";
import RightCol from "./RightCol";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="mt-2">
            <Col>
              <LeftCol />
            </Col>
            <Col sm={8}>
              <MainCol />
            </Col>
            <Col>
              <RightCol />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
