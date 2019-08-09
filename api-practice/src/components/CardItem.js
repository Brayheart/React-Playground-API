import React from 'react'
import {
  Card,
  Row,
  Col
} from 'react-bootstrap';

const CardItem = ({card}) => {
    console.log('props', card)
      return (
        <div>
          {/* <h3>Date: {card.dt_txt}</h3>
          <h4>Temp: {card.main.temp}</h4>
          <h4>Temp: {card.weather[0].main}</h4>
          <h4>Temp: {card.weather[0].description}</h4> */}
            <Col s={2}>
                <Card bg="secondary" text="white" >
                  {/* <Card.Header>{this.icon(lodash.get(this.state, 'card.weather[0].main'))}</Card.Header> */}
                  <Card.Body>
                    <Card.Title>{card.dt_txt}</Card.Title>
                    <Card.Text>
                      <div>{card.weather[0].description}</div>
                      <div>{card.main.temp}℉</div>
                  </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          <Card/>
        </div>
      )
}

export default CardItem