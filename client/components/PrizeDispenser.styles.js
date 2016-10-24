import createClassNameAccessor from '../styles/utils'

const door = {
  width: '50%',
  boxSizing: 'border-box',
  backgroundColor: 'silver',
  position: 'absolute',
  top: 0,
  height: '100%',
  zIndex: 2,
  '-webkit-transform': 'translate3d(0, 0, 0)',
  getState(isPlaying, beverageWon) {
    return [
      beverageWon && !isPlaying && 'state.open'
    ]
  }
}

const styles = {
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
    ...door,
    borderRight: '2px solid gray',
    left: 0,
    transition: 'left 1s linear',
    states: {
      open: {
        left: '-50%'
      }
    }
  },
  rightDoor: {
    ...door,
    borderLeft: '2px solid gray',
    right: 0,
    transition: 'right 1s linear',
    states: {
      open: {
        right: '-50%'
      }
    }
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
    '-webkit-transform': 'translate3d(0, 0, 0)',
    states: {
      appear: {
        top: '10%'
      }
    },
    getState(isPlaying, beverageWon) {
      return [
        beverageWon && !isPlaying && 'state.appear'
      ]
    }
  },
  prizeImg: {
    height: 100,
    width: 100
  }
}

export default createClassNameAccessor(styles)
