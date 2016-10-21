import React, { Component } from 'react'
import { AppContainer } from 'react-hot-loader'
import DevTools from './components/DevTools'
import Root from './Root'

export default class DevRoot extends Component {
  render() {
    const { store, history } = this.props
    return (
      <AppContainer>
        <Root store={store} history={history} persistentComponents={DevTools} />
      </AppContainer>
    )
  }
}
