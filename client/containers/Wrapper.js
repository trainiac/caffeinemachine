import React, { Component } from 'react'
import classNames from './Wrapper.styles.js'

export default class Wrapper extends Component {
  render() {
    return (
      <div className={classNames.appContainer}>
        {this.props.children}
      </div>
    )
  }
}
