import { getNewCaffeineMachineResults } from '../reducers'

const startPlay = () => ({
  type: 'START_PLAY'
})

const receivedResults = results => ({
  type: 'RECEIVED_RESULTS',
  results
})

export default playTime => (dispatch, getState) => {
  dispatch(startPlay())
  return new Promise(resolve => {
    setTimeout(() => {
      const state = getState()
      const results = getNewCaffeineMachineResults(state)
      let action = receivedResults(results)
      action = dispatch(action)
      resolve(action)
    }, playTime)
  })
}
