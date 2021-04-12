import React from "react";
import TwitchPlayer from "./TwitchPlayer";
import TwitchChat from "./TwitchChat";
import { Container, Col, Row } from "react-bootstrap";
import "../App.css";

class Stream extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="mt-3">
            <Col></Col>
            <Col sm={8}>
              <TwitchPlayer />
            </Col>
            <Col sm={3}>
              <TwitchChat />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Stream;
