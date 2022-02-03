import React from "react";
import axios from "axios";
import { URL_BASE, Headers } from "../../constants/urls";
import { ButtonsContainer, JobsCardContainer } from "./styled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  IconButton,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import styled from "styled-components";

export default class ContractPage extends React.Component {
  state = {
    buscaTitulo: "",
    jobs: [],
    precoMax: "",
    precoMin: "",
    sortingParameter: "",
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
          <select
            name="sort"
            value={this.state.sortingParameter}
            onChange={this.updateSortingParameter}
          >
            <option value="title">Título</option>
            <option value="dueDate">Prazo</option>
            <option value="price-ascending">Preço - Crescente</option>
            <option value="price-descending">Preço - Decrescente</option>
          </select>
        </div>
        {jobsList}
      </div>
    );
  }
}
