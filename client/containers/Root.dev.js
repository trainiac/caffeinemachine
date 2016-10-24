import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CaffeineMachineApp from './CaffeineMachineApp'
import DevTools from '../components/DevTools'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div id="devRoot">
          <CaffeineMachineApp history={history} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
