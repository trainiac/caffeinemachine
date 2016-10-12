import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router'

class CheckoutPage extends Component {

  render() {
    return (
      <div>
          <Link to="/objects/" activeClassName="active">Objectfadfas</Link>
      </div>
    )
  }
}

export default connect()(CheckoutPage)
