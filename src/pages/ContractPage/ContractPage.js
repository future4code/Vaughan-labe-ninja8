import React from 'react'

export default class ContractPage extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleHomePage}>Home</button>
        <button onClick={this.props.handleCartPage}>Carrinho</button>
        <h2>Contrato</h2>
        <button onClick={this.props.handleContractDetailPage}>Detalhes</button>
        <button>Adicionar ao carrinho(Uma função de adicionar deve entrar aqui)</button>
      </div>
    )
  }
}