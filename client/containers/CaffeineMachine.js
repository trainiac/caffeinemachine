import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

import { getWonCaffeineMachineBeverage } from '../reducers'
import MachineButton from '../components/MachineButton'
import Banner from '../components/Banner'
import Slots from '../components/Slots'
import PrizeDispenser from '../components/PrizeDispenser'
import play from '../actions'

const slotMachineWidth = 600
const slotMachineHeight = 600
const padding = 50
const styles = StyleSheet.create({
  slotMachine: {
    position: 'absolute',
    width: slotMachineWidth,
    height: slotMachineHeight,
    top: '50%',
    left: '50%',
    marginTop: -(slotMachineWidth / 2), // eslint-disable-line no-magic-numbers
    marginLeft: -(slotMachineWidth / 2) // eslint-disable-line no-magic-numbers
  },
  slotMachineTop: {
    backgroundColor: '#df3a3f',
    padding,
    width: '70%',
    margin: '0 auto',
    borderRadius: '10px 10px 0 0'
  },
  slotMachineBottom: {
    backgroundColor: '#df3a3f',
    borderRadius: 10
  },
  isPlaying: {
    backgroundColor: 'blue'
  },
  buttonContainer: {
    textAlign: 'center'
  }
})

class CaffeineMachine extends Component {

  render() {
    const playDuration = 3000
    const { isPlaying, results, slots, onPlay, beverageWon } = this.props
    const slotMachineStyles = css(
      styles.slotMachine
    )
    const slotMachineTopStyles = css(
      styles.slotMachineTop
    )
    const slotMachineBottomStyles = css(
      styles.slotMachineBottom
    )
    const buttonContainerClasses = css(styles.buttonContainer)
    return (
      <div className={slotMachineStyles}>
        <div className={slotMachineTopStyles}>
          <Banner isPlaying={isPlaying}/>
          <Slots slots={slots} results={results} isPlaying={isPlaying}/>
          <div className={buttonContainerClasses}>
            <MachineButton onPlay={() => onPlay(playDuration)} isPlaying={isPlaying} />
          </div>
        </div>
        <div className={slotMachineBottomStyles}>
          <PrizeDispenser isPlaying={isPlaying} beverageWon={beverageWon} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.caffeineMachine,
    beverageWon: getWonCaffeineMachineBeverage(state)
  }),
  { onPlay: play }
)(CaffeineMachine)

