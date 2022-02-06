import React from "react";
import styled from "styled-components";

// const CartCard = styled.div`
//   display: flex;
// `;

export default class CartPage extends React.Component {
  render() {
    // const productOnCart = this.props.cart.map((item) => {
    //   return <CartCard title={item.title} price={item.price} id={item.id} />;
    // });
    return (
      <>
        <div>
          <p>{this.props.title}</p>
          <p>{this.props.price}</p>
          {/* <button onClick={() => this.props.deleteFromCart(this.props.id)}>
            Remover
          </button> */}
        </div>
        <div>
          <button onClick={this.props.handleHomePage}>Home</button>
          <button onClick={this.props.handleContractPage}>
            Voltar aos contratos
          </button>
          <h2>Carrinho</h2>
          <button>Contratar serviços(Aqui entra uma função)</button>
        </div>
      </>
    );
  }
}
