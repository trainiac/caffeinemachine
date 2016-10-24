import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getWonCaffeineMachineBeverage } from '../reducers'
import MachineButton from '../components/MachineButton'
import Banner from '../components/Banner'
import Slots from '../components/Slots'
import PrizeDispenser from '../components/PrizeDispenser'
import play from '../actions'
import classNames from './CaffeineMachine.styles.js'

class CaffeineMachine extends Component {

  render() {
    const playDuration = 3000
    const { isPlaying, results, slots, onPlay, beverageWon } = this.props
    return (
      <div className={classNames.slotMachine}>
        <div className={classNames.slotMachineTop}>
          <Banner isPlaying={isPlaying}/>
          <Slots slots={slots} results={results} isPlaying={isPlaying}/>
          <div className={classNames.buttonContainer}>
            <MachineButton onPlay={() => onPlay(playDuration)} isPlaying={isPlaying} />
          </div>
        </div>
        <div className={classNames.slotMachineBottom}>
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
