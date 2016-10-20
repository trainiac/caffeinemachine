import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import styleUtils from '../styles/utils'

export default ({ results, slots, isPlaying }) => {
  const isSelectedOutcome = (result, outcome) =>
      result.category === outcome.category &&
      result.type === outcome.type

  const styles = StyleSheet.create({
    clearfix: styleUtils.clearfix,

    slotsContainer: {
      padding: '10px 15px',
      backgroundColor: 'silver',
      marginBottom: 20,
      borderRadius: 10
    },
    outcome: {
      height: 120,
      display: 'none'
    },
    selectedOutcome: {
      display: 'block'
    },
    playingOutcome: {
      display: 'block'
    },

    outcomeReel: {
      position: 'absolute',
      top: 0,
      left: 0,
      '-webkit-transform': 'translate3d(0, 0, 0)'
    },

    spin: {
      '-webkit-animation-name': 'spinner',
      '-webkit-animation-timing-function': 'linear',
      '-webkit-animation-iteration-count': 'infinite',
      '-webkit-animation-duration': '0.2s',
      '-webkit-transform-style': 'preserve-3d'
    },

    slot: {
      height: 120,
      overflow: 'hidden',
      border: '1px solid #8d9494',
      backgroundColor: 'white',
      width: '80%',
      margin: '0 auto',
      borderRadius: 10,
      position: 'relative',
      zIndex: 0
    },

    slotWrapper: {
      'float': 'left',
      width: '33.33333%',
      boxSizing: 'border-box'
    },
    outcomeImg: {
      maxWidth: '100%',
      borderRadius: 10
    }
  })

  const slotsContainerClassNames = css(
    styles.slotsContainer
  )

  const slotClassNames = css(
    styles.slot
  )

  const innerSlotContainerStyles = css(
    styles.clearfix
  )

  const slotWrapperStyles = css(
    styles.slotWrapper
  )

  const outcomImgStyles = css(
    styles.outcomeImg
  )

  const outcomeReelStyles = css(
    styles.outcomeReel,
    isPlaying && styles.spin
  )

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

  return (

    <div className={slotsContainerClassNames}>
      <div className={innerSlotContainerStyles}>{

        slots.map((slot, index) => {
          const result = results[index]

          return (
            <div className={slotWrapperStyles}>
              <div key={`slot-${index}`} className={slotClassNames}>
                <div className={outcomeReelStyles} >{
                  slot.map(outcome => {
                    const outcomeClassNames = css(
                      styles.outcome,
                      isSelectedOutcome(outcome, result) && styles.selectedOutcome,
                      isPlaying && styles.playingOutcome
                    )

                    const outcomeKey = `${outcome.category}-${outcome.type}`

                    return (
                      <div key={outcomeKey} className={outcomeClassNames}>{
                          <img
                            className={outcomImgStyles}
                            {...outcomeImgProps[outcome.category][outcome.type]} />
                      }</div>
                    )
                  })
                }</div>
              </div>
            </div>
          )
        })
      }</div>
    </div>
  )
}
