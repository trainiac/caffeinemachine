import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <div>React, Redux, Node App is Running</div>
        <div>
            {children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

export default connect()(App)
