import React from 'react'
import Button from '@mui/material/Button';

export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h2>Home</h2>
        <Button variant="contained" onClick={this.props.handleRegisterPage}>Seja um Ninja</Button>
        <button onClick={this.props.handleContractPage}>Contrate um Ninja</button>
      </div>
    )
  }
}