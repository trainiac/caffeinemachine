import React, { Component /* , PropTypes */ } from 'react'

export default class ObjectComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleGoClick.bind(this)
  }

  handleGoClick() {
    console.log('clicked')  // eslint-disable-line
  }

  render() {
    return (
      <div>
        Go!fadfadsfa
      </div>
    )
  }
}

// ObjectComponent.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// }
