import { combineReducers } from 'redux'

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

initialState.results = initialState.slots.map(slot => slot[0])

export const getWonBeverage = state => {
  if (!state.hasPlayed) {
    return null
  }

  const categories = state.results.map(result => result.category)
  const didWin = categories.every(category => category === categories[0])
  if (didWin) {
    return categories[0]
  }

  return null
}

export const getResults = state => {
  const results = state.slots.map(
    slot => Math.floor(Math.random() * slot.length)
  )
  // const results = [1, 1, 1]
  return results.map((outcomeIndex, slotIndex) => state.slots[slotIndex][outcomeIndex])
}

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
