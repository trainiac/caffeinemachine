import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  clearfix: {
    ':after': {
      visibility: 'hidden',
      display: 'block',
      fontSize: 0,
      content: '" "',
      clear: 'both',
      height: 0
    }
  }
})
