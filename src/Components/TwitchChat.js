import React from "react";
import { Card } from "react-bootstrap";

class TwitchChat extends React.Component {
  render() {
    return (
      <div>
        <Card bg='dark'>
          <Card.Body>
            <Card.Title className='text-color'>Chat</Card.Title>
            <iframe
              title='chat'
              frameBorder='0'
              scrolling="no"
              src='https://www.twitch.tv/embed/h8b1t/chat?parent=localhost&darkpopout'
              height='720'
              width='100%'
            ></iframe>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TwitchChat;
