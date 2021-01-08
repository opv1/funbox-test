import React, { useReducer } from 'react'
import { AppContext } from './AppContext'
import { appReducer } from './appReducer'
import { SELECTED_CARD } from './types'

function AppState({ children }) {
  const initialState = {
    cards: [
      {
        id: 1,
        signature: 'Сказочное заморское явство',
        leaveSignature: 'Котэ не одобряет?',
        title: 'Нямушка',
        doping: 'фуа-гра',
        portion: '10',
        present: 'мышь',
        weight: '0,5',
        text: 'Печень утки разварная с атришоками.',
        selected: false,
        disable: false,
      },
      {
        id: 2,
        signature: 'Сказочное заморское явство',
        leaveSignature: 'Котэ не одобряет?',
        title: 'Нямушка',
        doping: 'рыбой',
        portion: '40',
        present: '2 мыши',
        weight: '2',
        text: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        selected: false,
        disable: false,
      },
      {
        id: 3,
        signature: 'Сказочное заморское явство',
        leaveSignature: 'Котэ не одобряет?',
        title: 'Нямушка',
        doping: 'курой',
        portion: '100',
        present: '5 мышей',
        weight: '5',
        text: 'Филе из цыплят с трюфелями в бульоне.',
        selected: false,
        disable: true,
      },
    ],
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const { cards } = state

  const selectingCard = (selectedCard) => {
    const copyCards = JSON.parse(JSON.stringify(cards))

    const newCards = copyCards.map((card) => {
      if (card.id === selectedCard.id) {
        card.selected = !card.selected
      }

      return card
    })

    dispatch({
      type: SELECTED_CARD,
      payload: newCards,
    })
  }

  return (
    <AppContext.Provider value={{ cards, selectingCard }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState
