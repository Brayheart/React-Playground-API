import React, { Component } from 'react';
import axios from 'axios'
import './app.css'
import KEY from './api.js'
import lodash from 'lodash'
import SearchBar from './components/searchBar' 
import Main from './components/Main'
import Cards from './components/Cards'
import { 
  Container,
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
    console.log(zipcode)
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
          <SearchBar 
            zipcode={this.state.zipcode}
            onFormSubmit={this.onFormSubmit}
            updateZip={(e) => this.setState({zipcode: e.target.value})}
          />
          <Main 
            weather={this.state.weather} 
            icon={this.icon}
          />
          <Cards
            forecast={this.state.forecast}
          />
          </Container>
      </div>
    );
  }
}

export default App;

/* TODO:
map card componenets 
search by city
searchbar input linked to url 
change color based on temp?
*/

/* 
https: //github.com/HackerNews/API
  
  https: //www.quandl.com/data/EOD-End-of-Day-US-Stock-Prices
  https: //www.data.gov/

https://openweathermap.org/price


*/