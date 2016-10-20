import 'babel-polyfill'
import styles from './styles/index' // eslint-disable-line no-unused-vars
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import rootReducer from './reducers'
import storeEnhancer from './enhancers'
import Root from './Root'

const store = createStore(rootReducer, storeEnhancer)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
      <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    render(
      <AppContainer
        component={require('./Root').default} // eslint-disable-line
        props={{ store, history }}
      />,
      document.getElementById('root')
    )
  })

  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers').default) // eslint-disable-line
  )
}
