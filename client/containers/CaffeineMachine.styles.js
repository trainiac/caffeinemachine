import createClassNameAccessor from '../styles/utils'

const slotMachineWidth = 600
const slotMachineHeight = 600
const padding = 50
const lightSize = 14


const styles = {
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
    width: '68%',
    margin: '0 auto',
    borderRadius: '10px 10px 0 0',
    position: 'relative'
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
  },
  topLights: {
    position: 'absolute',
    top: 0,
    left: 50,
    right: -50,
    width: '100%',
    height: padding,
    lineHeight: `${padding - 1}px`
  },
  leftLights: {
    position: 'absolute',
    top: 12,
    left: 0,
    height: '100%',
    width: 30,
    textAlign: 'center',
    padding: '0 10px'
  },
  rightLights: {
    position: 'absolute',
    top: 12,
    right: 0,
    height: '100%',
    width: 30,
    textAlign: 'center',
    padding: '0 10px'
  },
  topLight: {
    background: 'yellow',
    padding: lightSize,
    borderRadius: lightSize,
    display: 'inline-block',
    margin: '0 10px 0 0',
    verticalAlign: 'middle',
    opacity: '0.5',
    getState(isPlaying) {
      return [
        isPlaying && 'state.blink'
      ]
    },
    states: {
      blink: {
        '-webkit-animation-name': 'blinkLight',
        '-webkit-animation-timing-function': 'linear',
        '-webkit-animation-iteration-count': 'infinite',
        '-webkit-animation-duration': '0.5s'
      }
    }
  },
  verticalLight: {
    background: 'yellow',
    padding: lightSize,
    borderRadius: lightSize,
    margin: '0 0 10px 0px',
    display: 'block',
    opacity: '0.5',
    getState(isPlaying) {
      return [
        isPlaying && 'state.blink'
      ]
    },
    states: {
      blink: {
        '-webkit-animation-name': 'blinkLight',
        '-webkit-animation-timing-function': 'linear',
        '-webkit-animation-iteration-count': 'infinite',
        '-webkit-animation-duration': '0.5s'
      }
    }
  }
}

export default createClassNameAccessor(styles)
