import React from "react";
import ReactPlayer from "react-player";
import { Card } from "react-bootstrap";

class TwitchPlayer extends React.Component {
  render() {
    return (
      <div>
        <Card bg='dark'>
          <Card.Body>
            <Card.Title className='text-color'>Stream</Card.Title>
            <ReactPlayer
              url='https://twitch.tv/h8b1t'
              width='100%'
              height='720px'
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TwitchPlayer;
