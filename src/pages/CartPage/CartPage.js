import React from 'react'

export default class CartPage extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleHomePage}>Home</button>
        <button onClick={this.props.handleContractPage}>Voltar aos contratos</button>
        <h2>Carrinho</h2>
        <button>Contratar servições(Aqui entra uma função)</button>
      </div>
    )
  }
}