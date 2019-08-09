import React from 'react'
import CardItem from './CardItem'

const Cards = ({forecast}) => {
    // console.log('here cards', forecast)

    if(forecast) {
      const renderedCards = forecast.list.map((card) => {
        // console.log(card)
        return <CardItem card={card}/>
      })

      return (
        <div>
          <h1> {renderedCards} </h1>
        </div>
      )

    }
    return <h1>loading...</h1>
}

export default Cards