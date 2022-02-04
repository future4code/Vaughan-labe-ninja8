import React from "react";
import axios from "axios";
import { URL_BASE, Headers } from "../../constants/urls";
import { ButtonsContainer, JobsCardContainer, JobsContainer } from "./styled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  IconButton,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";


const Header = styled.header`
background-color: #f5f4fc;
height: 12vh;
display: flex;
padding: 15px;
margin: auto;
justify-content: space-between;
align-items: center;
`
export default class ContractPage extends React.Component {
  state = {
    buscaTitulo: "",
    jobs: [],
    precoMax: "",
    precoMin: "",
    sortingParameter: ""
  };

  componentDidMount() {
    this.getJobs();
  }
  getJobs = () => {
    axios
      .get(`${URL_BASE}/jobs`, Headers)
      .then((res) => {
        this.setState({ jobs: res.data.jobs });
        console.log(res.data.jobs);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  onChangeBuscaTitulo = (event) => {
    this.setState({
      buscaTitulo: event.target.value,
    });
  };

  onChangePrecoMax = (event) => {
    this.setState({
      precoMax: event.target.value,
    });
  };
  onChangePrecoMin = (event) => {
    this.setState({
      precoMin: event.target.value,
    });
  };
  
  updateSortingParameter = (event) => {
    this.setState({ sortingParameter: event.target.value });
  };

  render() {
    const filteredList = this.state.jobs
      .filter((job) => {
        return (
          job.title
            .toLowerCase()
            .includes(this.state.buscaTitulo.toLowerCase()) ||
          job.description.toLowerCase().includes(this.state.buscaTitulo)
        );
      })
      .filter((job) => {
        return this.state.precoMax === "" || job.price <= this.state.precoMax;
      })
      .filter((job) => {
        return this.state.precoMin === "" || job.price >= this.state.precoMin;
      })
      .sort((a, b) => {
        switch (this.state.sortingParameter) {
          case "title":
            return a.title.localeCompare(b.title);
          case "dueDate":
            return (
              new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
            );
          case "price-ascending":
            return a.price - b.price;
          case "price-descending":
            return b.price - a.price;
          default:
            return a.title.localeCompare(b.title);
        }
      });

    const jobsList = filteredList.map((list) => (
      // list.list2.map((listing) =>
      // )
      <JobsCardContainer key={list.id}>
        <CardContent>
          <Typography variant="h5" component="div">
            {list.title}
          </Typography>
          <Typography variant="body2">
            <strong>Disponivél até:</strong> {list.dueDate}
            <br />
            por <strong>R${list.price},00</strong>
          </Typography>
          {list.description}
        </CardContent>
        <CardActions>
          <ButtonsContainer>
            <Button onClick={this.props.handleContractDetailPage} size="small">
              Ver Detalhes
            </Button>
            <IconButton size="small">
              <AddShoppingCartIcon />
            </IconButton>
          </ButtonsContainer>
        </CardActions>
      </JobsCardContainer>
    ));

    return (
      <div>
        <Header>
        <img src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=82cfc039-d5ca-492a-943b-e315609ce8d4&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2" width="80px"
        onClick={this.props.handleHomePage}></img>
          <div>
            <TextField
              placeholder="Busca por título ou descrição"
              value={this.state.buscaTitulo}
              onChange={this.onChangeBuscaTitulo}
            />
            <TextField
              type="Number"
              placeholder="Preço máximo"
              value={this.state.precoMax}
              onChange={this.onChangePrecoMax}
            />
            <TextField
              type="Number"
              placeholder="Preço mínimo"
              value={this.state.precoMin}
              onChange={this.onChangePrecoMin}
            />
              <Select
                name="sort"
                value={this.state.sortingParameter}
                onChange={this.updateSortingParameter}
              >
                <MenuItem value="title">Título</MenuItem>
                <MenuItem value="dueDate">Prazo</MenuItem>
                <MenuItem value="price-ascending">Preço - Crescente</MenuItem>
                <MenuItem value="price-descending">Preço - Decrescente</MenuItem>
              </Select>
          </div>
          <div>
            <ShoppingCartIcon color="primary" onClick={this.props.handleCartPage}>Carrinho</ShoppingCartIcon>
          </div>
        </Header>
        <JobsContainer>{jobsList}</JobsContainer>
      </div>
    );
  }
}
