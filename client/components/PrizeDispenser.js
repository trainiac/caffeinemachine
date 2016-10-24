import React from 'react'
import classNames from './PrizeDispenser.styles'

const prizeImgProps = {
  COFFEE: {
    alt: 'Coffee Maker',
    title: 'Coffee Maker',
    src: '/static/images/coffeemaker.jpg'
  },
  TEA: {
    alt: 'Tea Pot',
    title: 'Tea Pot',
    src: '/static/images/teapot.jpeg'
  },
  ESPRESSO: {
    alt: 'Espresso Beans',
    title: 'Espresso Beans',
    src: '/static/images/espressobeans.jpg'
  }
}

export default ({ isPlaying, beverageWon }) =>
  <div className={classNames.machineBottom}>
      <div className={classNames.prizeDispenser}>
          <div className={classNames.leftDoor(isPlaying, beverageWon)}>
          </div>
          <div className={classNames.rightDoor(isPlaying, beverageWon)}>
          </div>
          <div className={classNames.prize(isPlaying, beverageWon)}>
             <img {...prizeImgProps[beverageWon]} className={classNames.prizeImg}/>
          </div>
      </div>
  </div>
