import React from 'react'
import { classNames } from './Slots.styles'

const isSelectedOutcome = (outcome, result) =>
    result.category === outcome.category &&
    result.type === outcome.type

const outcomeImgProps = {
  COFFEE: {
    MAKER: {
      alt: 'Coffee Maker',
      title: 'Coffee Maker',
      src: '/static/images/coffeemaker.jpg'
    },
    GROUNDS: {
      alt: 'Coffee Grounds',
      title: 'Coffee Grounds',
      src: '/static/images/coffeegrounds.jpg'
    },
    FILTER: {
      alt: 'Coffee Filter',
      title: 'Coffee Filter',
      src: '/static/images/coffeefilter.jpg'
    }
  },
  TEA: {
    POT: {
      alt: 'Tea Pot',
      title: 'Tea Pot',
      src: '/static/images/teapot.jpeg'
    },
    STRAINER: {
      alt: 'Tea Strainer',
      title: 'Tea Strainer',
      src: '/static/images/teastrainer.jpg'
    },
    LOOSE: {
      alt: 'Loose Leaf Tea',
      title: 'Loose Leaf Tea',
      src: '/static/images/loosetea.png'
    }
  },
  ESPRESSO: {
    MACHINE: {
      alt: 'Espresso Machine',
      title: 'Espresso Machine',
      src: '/static/images/espressomachine.jpg'
    },
    TAMPER: {
      alt: 'Espresso Tamper',
      title: 'Espresso Tamper',
      src: '/static/images/espressotamper.jpg'
    },
    BEANS: {
      alt: 'Espresso Beans',
      title: 'Espresso Beans',
      src: '/static/images/espressobeans.jpg'
    }
  }
}

export default ({ results, slots, isPlaying }) =>
  <div className={classNames.slotsContainer}>
    <div className={classNames.innerSlotContainer}>{
      slots.map((slot, slotIndex) =>
        <div key={`slot-${slotIndex}`} className={classNames.slotWrapper}>
          <div className={classNames.slot}>
            <div className={classNames.outcomeReel(isPlaying)} >{

              slot.map((outcome, outcomeIndex) =>
                <div key={`outcome-${outcomeIndex}-${slotIndex}`}
                     className={classNames.outcome(
                       isSelectedOutcome(outcome, results[slotIndex]), isPlaying
                     )}
                >{
                  <img
                    className={classNames.outcomeImg}
                    {...outcomeImgProps[outcome.category][outcome.type]}
                  />
                }</div>
              )

            }</div>
          </div>
        </div>
      )

    }</div>
  </div>
