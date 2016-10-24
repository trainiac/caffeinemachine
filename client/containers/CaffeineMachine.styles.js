import createClassNameAccessor from '../styles/utils'

const slotMachineWidth = 600
const slotMachineHeight = 600
const padding = 50
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
}

export default createClassNameAccessor(styles)
