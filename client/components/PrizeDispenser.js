import React from 'react'
import classNames from './PrizeDispenser.styles'

const prizeImgProps = {
  COFFEE: {
    alt: 'Cup of coffee',
    title: 'Cup of coffee',
    src: '/static/images/coffee-cup.jpg'
  },
  TEA: {
    alt: 'Cup of tea',
    title: 'Cup of tea',
    src: '/static/images/tea.jpg'
  },
  ESPRESSO: {
    alt: 'Espresso',
    title: 'Espresso',
    src: '/static/images/espresso.jpg'
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
