import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

let enhancer
let createLogger
let DevTools

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk)
} else {
  DevTools = require('../components/DevTools').default // eslint-disable-line global-require
  createLogger = require('redux-logger')  // eslint-disable-line global-require
  enhancer = compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument()
  )
}

export default enhancer
