import React from 'react'

export default class ContractDetailPage extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleHomePage}> Home</button>
        <h2>Detalhes</h2>
        <button onClick={this.props.handleContractPage}>Voltar a lista</button>
      </div>
    )
  }
}