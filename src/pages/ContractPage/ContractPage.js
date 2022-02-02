import React from 'react';
import styled from "styled-components";

const CardJobs = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
margin: 10px;
height: 100px;
width: 350px;
 `
export default class ContractPage extends React.Component {
  state = {
    buscaTitulo: "",
    jobs: [
      { id: 1, title: "Aulas de inglês", description: "Aulas de inglês remotas", price: 50 },
      { id: 2, title: "Notebook usado", description: "Notebook usado com poucas marcas de uso", price: 1800 },
      { id: 3, title: "Aulas de vôlei", description: "Aulas de vôlei para crianças", price: 70 }
    ],
    precoMax: "",
    precoMin: ""

  }
  onChangeBuscaTitulo = (event) => {
    this.setState({
      buscaTitulo: event.target.value
    })
  }

  onChangePrecoMax = (event) => {
    this.setState({
      precoMax: event.target.value
    })
  }
  onChangePrecoMin = (event) => {
    this.setState({
      precoMin: event.target.value
    })
  }

  render() {
    return (
      <>
      <button onClick={this.props.handleHomePage}>Home</button>
        <button onClick={this.props.handleCartPage}>Carrinho</button>
        <h2>Contrato</h2>
        <button onClick={this.props.handleContractDetailPage}>Detalhes</button>
        <button>Adicionar ao carrinho(Uma função de adicionar deve entrar aqui)</button>
        <div>
          <input
            placeholder="Busca por título ou descrição"
            value={this.state.buscaTitulo}
            onChange={this.onChangeBuscaTitulo}
          />
          <input
            type="Number"
            placeholder="Preço máximo"
            value={this.state.precoMax}
            onChange={this.onChangePrecoMax}
          />
          <input
            type="Number"
            placeholder="Preço mínimo"
            value={this.state.precoMin}
            onChange={this.onChangePrecoMin}
          />
        </div>

        <div>
          {this.state.jobs
            .filter(job => {
              return job.title.toLowerCase().includes(this.state.buscaTitulo.toLowerCase()) || job.description.toLowerCase().includes(this.state.buscaTitulo)
            })

            .filter(job => {
              return this.state.precoMax === "" || job.price <= this.state.precoMax
            })
            .filter(job => {
              return this.state.precoMin === "" || job.price >= this.state.precoMin
            })

            .map(job => {
              return <CardJobs>
                <p>{job.title}</p>
                {job.description}
                {job.price}
              </CardJobs>
            })}

        </div>
      </>
    )
  }
}
