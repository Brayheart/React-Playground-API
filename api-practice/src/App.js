import React, { Component } from 'react';
import axios from 'axios'
import './app.css'
import KEY from './api.js'
import lodash from 'lodash'
import { 
  Container,
  Form, 
  FormControl, 
  Button, 
  Navbar, 
  Card,
  Row,
  Col
} from 'react-bootstrap';

class App extends Component {
  
  state = {
    weather : {
      "coord": {
        "lon": -122.08,
        "lat": 37.39
      },
      "weather": [{
        "id": 802,
        "main": "Snow",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "base": "stations",
      "main": {
        "temp": 293.16,
        "pressure": 1013,
        "humidity": 72,
        "temp_min": 289.26,
        "temp_max": 295.93
      },
      "visibility": 16093,
      "wind": {
        "speed": 2.1,
        "deg": 280
      },
      "clouds": {
        "all": 40
      },
      "dt": 1561052702,
      "sys": {
        "type": 1,
        "id": 4446,
        "message": 0.0116,
        "country": "US",
        "sunrise": 1561034857,
        "sunset": 1561087926
      },
      "timezone": -25200,
      "id": 420006353,
      "name": "Mountain View",
      "cod": 200
    },
    forecast: '',
    zipcode: 90275
  }

  componentDidMount() {
    this.onFormSubmit(this.state.zipcode)
  }

  callMyApi = (url) => {
    axios.get(url)
      .then(resp => {
        // console.log(resp)
        this.setState({
          weather: resp.data
        })
      })
  }

  callMyForecast = (url) => {
    axios.get(url)
      .then(resp => {
        // console.log(resp)
        this.setState({
          forecast: resp.data
        })
      })
  }

  onFormSubmit = (zipcode) => {
    this.callMyApi(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${KEY}&units=imperial&units=imperial
`)
    this.callMyForecast(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${KEY}&units=imperial
`)
  }

  icon = (weather) => {
      if(weather === 'Clouds'){
        return <i className="fa fa-cloud fa-3x"></i>;
      }
      else if (weather === 'Clear') {
        return <i className="fa fa-sun-o fa-3x" aria-hidden="true"></i>
      }
      else if (weather === 'Snow') {
        return <i className="fa fa-snowflake-o fa-3x" aria-hidden="true"></i>
      }
      else if (weather === 'Rain') {
        return <i className="fa fa-tint fa-3x" aria-hidden="true"></i>
      }
      else if (weather === 'Drizzle') {
        return <i className="fa fa-tint fa-3x" aria-hidden="true"></i>
      }
      else if (weather === 'Thunderstorm') {
        return <i className="fa fa-bolt fa-3x" aria-hidden="true"></i>
      }

  }

  render() {

    return (
      <div>
        <Container id='base'>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Weather Report</Navbar.Brand>
              <Form inline 
              onSubmit={() => this.onFormSubmit(this.state.zipcode)}
              >
                <FormControl placeholder="Search" className="mr-sm-2" 
                  type="text"
                  value={this.state.zipcode}
                  onChange={e => this.setState({ zipcode: e.target.value })}
                  />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>
          </Navbar>
          
{/* {console.log(this.state.weather)} */}
{console.log(this.state.forecast)}

        <div style={{
          margin: "0 auto",
          textAlign: "center"
        }}>
          <div className='test'>{this.icon(this.state.weather.weather[0].main)}</div>
          <div>{this.state.weather.weather[0].description}</div>
          <h4>{this.state.weather.main.temp}℉</h4>
          <h3>{this.state.weather.main.temp_max}℉/{this.state.weather.main.temp_min}℉</h3>
          <div>{this.state.weather.name}</div>
            <Card bg="light" >
              <Card.Header><h3>5 day forecast</h3></Card.Header>
              <Card.Body>
                <Row>
            <Col s={2}>
                <Card bg="primary" text="white" >
                  <Card.Header>{this.icon(lodash.get(this.state, 'forecast.list[0].weather[0].main'))}</Card.Header>
                  <Card.Body>
                    <Card.Title>{lodash.get(this.state, 'forecast.list[0].weather[0].description')}</Card.Title>
                    <Card.Text>
                      {/* {this.state.forecast.list[0].weather[0].main} */}
                      Temp
                  </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col s={2}>
                <Card bg="secondary" text="white" >
                  <Card.Header>Icon</Card.Header>
                  <Card.Body>
                    <Card.Title>Day 2</Card.Title>
                    <Card.Text>
                      Temp
                  </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col s={2}>
                <Card bg="success" text="white" >
                  <Card.Header>Icon</Card.Header>
                  <Card.Body>
                    <Card.Title>Day 3</Card.Title>
                    <Card.Text>
                      Temp
                  </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col s={2}>
                <Card bg="warning" text="white" >
                  <Card.Header>Icon</Card.Header>
                  <Card.Body>
                    <Card.Title>Day 4</Card.Title>
                    <Card.Text>
                      Temp
                  </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col s={2}>
                <Card bg="info" text="white" >
                  <Card.Header>Icon</Card.Header>
                  <Card.Body>
                    <Card.Title>Day 5</Card.Title>
                    <Card.Text>
                      Temp
                  </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
              </Card.Body>
            </Card>
          
        </div>



          </Container>
      </div>
    );
  }
}

export default App;


/* 
https: //github.com/HackerNews/API
  
  https: //www.quandl.com/data/EOD-End-of-Day-US-Stock-Prices
  https: //www.data.gov/

https://openweathermap.org/price


*/