import React from "react";
import { Card } from "react-bootstrap";

class RightCol extends React.Component {
  render () {
    return (
      <div>
        <Card bg='dark' className='mt-3'>
          <Card.Body>
            <Card.Title className="text-color">Things to add:</Card.Title>
            <Card.Text className='text-color'>
              - Add Github API npm for projects page<br />
              - Pull github projects with API calls and add to cards<br />
              - Add images to middle card
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RightCol;
