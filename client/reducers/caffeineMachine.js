import { combineReducers } from 'redux'
import _ from 'lodash/fp'

const initialState = {
  isPlaying: false,
  slots: [
    [{
      type: 'MAKER',
      category: 'COFFEE'
    }, {
      type: 'POT',
      category: 'TEA'
    }, {
      type: 'MACHINE',
      category: 'ESPRESSO'
    }],
    [{
      type: 'FILTER',
      category: 'COFFEE'
    }, {
      type: 'STRAINER',
      category: 'TEA'
    }, {
      type: 'TAMPER',
      category: 'ESPRESSO'
    }],
    [{
      type: 'GROUNDS',
      category: 'COFFEE'
    }, {
      type: 'LOOSE',
      category: 'TEA'
    }, {
      type: 'BEANS',
      category: 'ESPRESSO'
    }]
  ],
  hasPlayed: false
}

initialState.results = _.map(_.head)(initialState.slots)

const resultsDidWin = _.flow(
  _.map(_.property('category')),
  _.uniq,
  _.size,
  _.eq(1)
)

const getFirstCategory = _.flow(
  _.head,
  _.property('category')
)

export const getWonBeverage = state => {
  if (!state.hasPlayed) {
    return null
  }

  if (resultsDidWin(state.results)) {
    return getFirstCategory(state.results)
  }

  return null
}

export const getResults = state => _.map(_.sample)(state.slots)

const hasPlayed = (state = initialState.hasPlayed, action) => {
  const type = action.type
  switch (type) {
    case 'START_PLAY':
      return true
    default:
      return state
  }
}

const isPlaying = (state = initialState.isPlaying, action) => {
  switch (action.type) {
    case 'START_PLAY':
      return true
    case 'RECEIVED_RESULTS':
      return false
    default:
      return state
  }
}

const slots = () => initialState.slots

const results = (state = initialState.results, action) => {
  switch (action.type) {
    case 'RECEIVED_RESULTS':
      return action.results
    default:
      return state
  }
}

export default combineReducers({
  hasPlayed,
  isPlaying,
  results,
  slots
})
