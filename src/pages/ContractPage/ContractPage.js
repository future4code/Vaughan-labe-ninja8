import React from 'react'
import axios from 'axios'
import {URL_BASE, Headers} from '../../constants/urls'
import { ButtonsContainer, JobsCardContainer } from './styled'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, CardContent, CardActions, Button, Typography } from '@mui/material'
export default class ContractPage extends React.Component {
  state = {
    jobs: [],
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
    )
    console.log(jobsList.title)
    return (
      <div>
        <button onClick={this.props.handleHomePage}>Home</button>
        <button onClick={this.props.handleCartPage}>Carrinho</button>
        <h2>Contratos</h2>
        {jobsList}
      </div>
    )
  }
}