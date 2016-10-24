import createClassNameAccessor from '../styles/utils'
import helperStyleSheetStyles from '../styles/helpers'

const styles = {
  slotsContainer: {
    padding: '10px 15px',
    backgroundColor: 'silver',
    marginBottom: 20,
    borderRadius: 10
  },
  innerSlotContainer: {
    helpers: ['clearfix']
  },
  slotWrapper: {
    'float': 'left',
    width: '33.33333%',
    boxSizing: 'border-box'
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
  outcomeReel: {
    position: 'absolute',
    top: 0,
    left: 0,
    '-webkit-transform': 'translate3d(0, 0, 0)',
    getState(isPlaying) {
      return [
        isPlaying && 'state.spin'
      ]
    },
    states: {
      spin: {
        '-webkit-animation-name': 'spinner',
        '-webkit-animation-timing-function': 'linear',
        '-webkit-animation-iteration-count': 'infinite',
        '-webkit-animation-duration': '0.2s',
        '-webkit-transform-style': 'preserve-3d'
      }
    }
  },
  outcome: {
    height: 120,
    display: 'none',
    getState(isSelected, isPlaying) {
      return [
        isSelected && 'state.selected',
        isPlaying && 'state.playing'
      ]
    },
    states: {
      playing: {
        display: 'block'
      },
      selected: {
        display: 'block'
      }
    }
  },
  outcomeImg: {
    maxWidth: '100%',
    borderRadius: 10
  }
}

const classNames = createClassNameAccessor(styles, helperStyleSheetStyles)

export { classNames }
