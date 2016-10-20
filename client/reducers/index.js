import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import caffeineMachine, * as fromCaffeineMachine from './caffeineMachine'

export default combineReducers({
  routing,
  caffeineMachine
})

export const getNewCaffeineMachineResults = state =>
  fromCaffeineMachine.getResults(state.caffeineMachine)

export const getWonCaffeineMachineBeverage = state =>
  fromCaffeineMachine.getWonBeverage(state.caffeineMachine)
