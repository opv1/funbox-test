import React, { useContext, useState } from 'react'
import { AppContext } from '../../state/AppContext'
import photoCat from '../../assets/images/cat.png'
import './Card.scss'

function Card({ children }) {
  const { selectingCard } = useContext(AppContext)

  const [mouseLeave, setMouseLeave] = useState(false)

  const {
    signature,
    leaveSignature,
    title,
    doping,
    portion,
    present,
    weight,
    selected,
  } = children

  const cls = ['card-item']

  if (children.selected) {
    cls.push('card-item_selected')
  } else if (children.disable) {
    cls.push('card-item_disable')
  }

  const addListener = () => {
    if (selected) {
      setMouseLeave(true)
    }
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => {
        setMouseLeave(false)
        selectingCard(children)
      }}
      onMouseLeave={addListener}
    >
      <div className='card-description'>
        <span
          className='card-signature'
          style={selected && mouseLeave ? { color: '#d91667' } : {}}
        >
          {selected && mouseLeave ? leaveSignature : signature}
        </span>
        <h2 className='card-title'>{title}</h2>
        <span className='card-doping'>с&nbsp;{doping}</span>
        <div className='card-info'>
          <span className='card-portion'>
            <strong className='card-count'>{portion}</strong>&nbsp;порций
          </span>
          <span className='card-present'>
            <strong className='card-count'>{present}</strong>&nbsp;в подарок
          </span>
          {children.disable ? (
            <span className='card-present'>заказчик доволен</span>
          ) : null}
        </div>
        <div className='card-image'>
          <img src={photoCat} alt='cat' />
        </div>
        <div className='card-circle'>
          <span className='card-weight'>{weight}</span>
          <span className='card-measure'>кг</span>
        </div>
      </div>
      {children.selected ? (
        <span className='card-text'>{children.text}</span>
      ) : children.disable ? (
        <span className='card-text' style={{ color: '#ffff66' }}>
          Печалька, с {doping} закончился
        </span>
      ) : (
        <span className='card-text'>
          Чего сидишь? Порадуй котэ,&nbsp;
          <a
            className='card-link'
            onClick={() => selectingCard(children)}
            href='!#'
          >
            купи.
          </a>
        </span>
      )}
    </li>
  )
}

export default Card
