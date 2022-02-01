import React from 'react'


export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.props.handleRegisterPage}>Seja um Ninja</button>
        <button onClick={this.props.handleContractPage}>Contrate um Ninja</button>
      </div>
    )
  }
}