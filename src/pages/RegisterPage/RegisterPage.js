import React from 'react'
import Button from '@mui/material/Button';
export default class RegisterPage extends React.Component {
  render () {
    return (
      <div>
        <Button variant="contained" onClick={this.props.handleHomePage}>Home</Button>
        <h2>Seja um Ninja</h2>
        
      </div>
    )
  }
}