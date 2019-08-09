import React from 'react'

class Main extends React.Component{
  render() {
    console.log(this.props)
    return (
      <div>
        <div className='test'>{this.props.icon(this.props.weather.weather[0].main)}</div>
        <div>{this.props.weather.weather[0].description}</div>
        <h4>{this.props.weather.main.temp}℉</h4>
        <h3>{this.props.weather.main.temp_max}℉/{this.props.weather.main.temp_min}℉</h3>
        <div>{this.props.weather.name}</div>
      </div>
    )
  }
}

export default Main