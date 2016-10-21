import 'babel-polyfill'
import styles from './styles/index' // eslint-disable-line no-unused-vars
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import storeEnhancer from './enhancers'

const store = createStore(rootReducer, storeEnhancer)
const history = syncHistoryWithStore(browserHistory, store)

let Root

const mount = () => {
  render(
    <Root store={store} history={history} />,
    document.getElementById('root')
  )
}

if (process.env.NODE_ENV === 'prod') {
  Root = require('./Root.js').default // eslint-disable-line global-require
} else {
  Root = require('./Root.dev.js').default // eslint-disable-line global-require
}

mount()

if (process.env.NODE_ENV === 'dev') {
  if (module.hot) {
    module.hot.accept('./Root.dev.js', () => {
      mount()
    })

    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default) // eslint-disable-line global-require
    )
  }
}
