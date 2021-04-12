import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

class LeftCol extends React.Component {
  render() {
    return (
      <div>
        <Card bg='dark' className='mt-3 ml-0'>
          <Row className='mt-3 ml-1'>
            <Col xs='auto'>
              <Image
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/e69efaf7-26c4-458d-87f0-a871b2486b4b-profile_image-70x70.png'
                roundedCircle
              ></Image>
            </Col>
            <Col xs='auto'>
              <Card.Title className='mt-2 text-color'>About jacob.</Card.Title>
              <Card.Link className='text-muted' href="https://twitch.tv/h8b1t">
                twitch.tv/h8b1t
              </Card.Link>
            </Col>
          </Row>
          <Card.Body>
            <Card.Text className='text-color'>
              My name is Jacob. I am a full time tech supporter and part time
              twitch streamer. I also write code in my spare time (like this
              website). I specialize in javascript with NodeJS and React.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LeftCol;
