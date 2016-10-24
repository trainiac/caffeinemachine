import { connect } from 'react-redux'
import React, { Component } from 'react'
import classNames from './App.styles.js'

class App extends Component {
  render() {
    return (
      <div className={classNames.appContainer}>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
