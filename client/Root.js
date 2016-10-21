import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import CaffeineMachine from './containers/CaffeineMachine'
import App from './containers/App'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div id="reactRoot">
          <Router history={history}>
              <Route path="/" component={App}>
                <IndexRoute component={CaffeineMachine} />
              </Route>
          </Router>
          {this.props.persistentComponents}
        </div>
      </Provider>
    )
  }
}
