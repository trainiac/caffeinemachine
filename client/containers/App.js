import { connect } from 'react-redux'
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f4f4f4',
    height: '100%'
  }
})

class App extends Component {
  render() {
    return (
      <div className={css(styles.appContainer)}>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
