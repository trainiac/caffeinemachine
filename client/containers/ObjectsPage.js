import { connect } from 'react-redux'
import React, { Component } from 'react'
import ObjectComponent from '../components/ObjectComponent'

class DevelopersPage extends Component {

  render() {
    return (
      <div>
        <ObjectComponent/>
      </div>
    )
  }
}


export default connect()(DevelopersPage)
