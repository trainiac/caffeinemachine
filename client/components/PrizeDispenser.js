import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  machineBottom: {
    padding: 15
  },
  prizeDispenser: {
    width: '60%',
    padding: '0 50px',
    backgroundColor: 'white',
    position: 'relative',
    height: 170,
    margin: '0 auto',
    overflow: 'hidden'
  },
  leftDoor: {
    width: '50%',
    borderRight: '2px solid gray',
    boxSizing: 'border-box',
    backgroundColor: 'silver',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    transition: 'left 1s linear',
    zIndex: 2,
    '-webkit-transform': 'translate3d(0, 0, 0)'
  },
  leftDoorOpen: {
    left: '-50%'
  },
  rightDoor: {
    width: '50%',
    borderLeft: '2px solid gray',
    boxSizing: 'border-box',
    backgroundColor: 'silver',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    transition: 'right 1s linear',
    zIndex: 2,
    '-webkit-transform': 'translate3d(0, 0, 0)'
  },
  rightDoorOpen: {
    right: '-50%'
  },
  prize: {
    transition: 'top 1s linear',
    position: 'absolute',
    top: '100%',
    margin: '0 0 0 -50px',
    left: '50%',
    zIndex: 1,
    height: 100,
    width: 100,
    '-webkit-transform': 'translate3d(0, 0, 0)'
  },
  prizeImg: {
    height: 100,
    width: 100
  },
  prizeAppear: {
    top: '10%'
  }
})

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

export default ({ isPlaying, beverageWon }) => {
  const machineBottomStyles = css(
    styles.machineBottom
  )
  const prizeDispenserStyles = css(
    styles.prizeDispenser
  )
  const leftDoorStyles = css(
    styles.leftDoor,
    beverageWon && !isPlaying && styles.leftDoorOpen
  )
  const rightDoorStyles = css(
    styles.rightDoor,
    beverageWon && !isPlaying && styles.rightDoorOpen
  )
  const prizeStyles = css(
    styles.prize,
    beverageWon && !isPlaying && styles.prizeAppear
  )
  const prizeImgStyles = css(
    styles.prizeImg
  )
  return (
    <div className={machineBottomStyles}>
        <div className={prizeDispenserStyles}>
            <div className={leftDoorStyles}>
            </div>
            <div className={rightDoorStyles}>
            </div>
            <div className={prizeStyles}>
               <img {...prizeImgProps[beverageWon]} className={prizeImgStyles}/>
            </div>
        </div>
    </div>
  )
}

