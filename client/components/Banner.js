import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    fontFamily: '"Bungee Inline", cursive',
    fontWeight: 400,
    fontStyle: 'normal',
    marginTop: 0,
    color: 'rgba(0,0,0,0.87)'
  }
})

export default ({ isPlaying }) => {
  const classes = css(
    styles.banner
  )
  return (
    <h1 className={classes}>
        The Caffeine Machine
    </h1>
  )
}

