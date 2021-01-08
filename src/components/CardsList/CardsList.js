import React, { useContext } from 'react'
import { AppContext } from '../../state/AppContext'
import Card from '../Card/Card'
import './CardsList.scss'

function CardList() {
  const { cards } = useContext(AppContext)

  return (
    <ul className='cards-list'>
      {cards.map((card) => (
        <Card key={card.id}>{card}</Card>
      ))}
    </ul>
  )
}

export default CardList
