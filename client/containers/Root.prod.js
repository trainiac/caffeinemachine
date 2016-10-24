import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CaffeineMachineApp from './CaffeineMachineApp'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <CaffeineMachineApp history={history} />
      </Provider>
    )
  }
}
