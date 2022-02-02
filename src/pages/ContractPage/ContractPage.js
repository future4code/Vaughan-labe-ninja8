import React from 'react'
import axios from 'axios'
import {URL_BASE, Headers} from '../../constants/urls'
import { ButtonsContainer, JobsCardContainer } from './styled'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, CardContent, CardActions, Button, Typography } from '@mui/material'
import styled from 'styled-components'

// const CardJobs = styled.div`
// display: flex;
// flex-direction: column;
// border: 1px solid black;
// margin: 10px;
// height: 100px;
// width: 350px;
//  `

export default class ContractPage extends React.Component {
  state = {
    buscaTitulo: "",
    jobs: [],
    precoMax: "",
    precoMin: ""
  }
  
  componentDidMount() {
    this.getJobs()
  }
  getJobs = () => {
    axios.get(`${URL_BASE}/jobs`, Headers)
    .then((res) => {
      this.setState({jobs: res.data.jobs})
      console.log(res.data.jobs)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
    
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
  
  render () {
    const jobsList = this.state.jobs.map((list) => 
    // list.list2.map((listing) => 
    // )
    <JobsCardContainer key={list.id}>
      <CardContent>
      <Typography variant="h5" component="div">
      {list.title}
        </Typography>
        <Typography variant="body2">
        <strong>Disponivél até:</strong> {list.dueDate}<br />
         por <strong>R${list.price},00</strong>
        </Typography>
        {list.description}
      </CardContent>
      <CardActions>
        <ButtonsContainer>
          <Button onClick={this.props.handleContractDetailPage} size="small">
            Ver Detalhes</Button>
          <IconButton  size="small"><AddShoppingCartIcon/></IconButton>
        </ButtonsContainer>
      </CardActions>
    </JobsCardContainer>
    ).filter(job => {
      return job.title.toLowerCase().includes(this.state.buscaTitulo.toLowerCase()) || job.description.toLowerCase().includes(this.state.buscaTitulo)
    })

    .filter(job => {
      return this.state.precoMax === "" || job.price <= this.state.precoMax
    })
    .filter(job => {
      return this.state.precoMin === "" || job.price >= this.state.precoMin
    })
    
    return (
      <div>
          <button onClick={this.props.handleHomePage}>Home</button>
          <button onClick={this.props.handleCartPage}>Carrinho</button>
          <h2>Contratos</h2>
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
          {jobsList}
      </div>
      
    )
  }
}