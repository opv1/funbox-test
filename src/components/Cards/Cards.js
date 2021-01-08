import React from 'react'
import CardsList from '../CardsList/CardsList'
import './Cards.scss'

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cards-caption'>Ты сегодня покормил кота?</h1>
      <CardsList />
    </div>
  )
}

export default Cards
