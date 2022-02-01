import React from 'react'

export default class RegisterPage extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleHomePage}>Home</button>
        <h2>Seja um Ninja</h2>
        
      </div>
    )
  }
}