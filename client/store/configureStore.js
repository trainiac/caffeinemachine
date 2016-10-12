import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
