import createClassNameAccessor from '../styles/utils'

const styles = {
  machineButton: {
    backgroundColor: '#3f93f3',
    textTransform: 'uppercase',
    outline: 'none',
    color: 'white',
    fontSize: 20,
    borderRadius: 6,
    border: 'none',
    padding: '20px 15px 20px 25px',
    letterSpacing: 10,
    fontFamily: '"Bungee Inline", cursive',
    getState(isPlaying) {
      return [
        !isPlaying && 'state.pulse'
      ]
    },
    states: {
      pulse: {
        '-webkit-animation': 'pulseButton 2s infinite'
      }
    }
  }
}

export default createClassNameAccessor(styles)
