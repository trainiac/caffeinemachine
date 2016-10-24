import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Wrapper from './Wrapper'
import CaffeineMachine from './CaffeineMachine'

export default class CaffeineMachineApp extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={history}>
          <Route path="/" component={Wrapper}>
            <IndexRoute component={CaffeineMachine} />
          </Route>
      </Router>
    )
  }
}
