import { browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import { syncHistoryWithStore } from 'react-router-redux'
import 'babel-polyfill'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept()
}

render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
)
