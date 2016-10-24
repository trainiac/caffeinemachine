import createClassNameAccessor from '../styles/utils'

const styles = {
  machineButton: {
    backgroundColor: '#3f93f3',
    textTransform: 'uppercase',
    ':hover': {
      backgroundColor: '#287ddd'
    },
    color: 'white',
    fontSize: 20,
    borderRadius: 6,
    border: 'none',
    padding: '20px 15px 20px 25px',
    letterSpacing: 10,
    fontFamily: '"Bungee Inline", cursive'
  }
}

export default createClassNameAccessor(styles)
