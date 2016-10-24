import React from 'react'
import classNames from './MachineButton.styles'

export default ({ isPlaying, onPlay }) =>
  <button onClick={onPlay} className={classNames.machineButton}>
      Play
  </button>
