import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import DevTools from '../components/DevTools'

export default compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)
