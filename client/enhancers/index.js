import { applyMiddleware, compose } from 'redux'
import DevTools from '../components/DevTools'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)

