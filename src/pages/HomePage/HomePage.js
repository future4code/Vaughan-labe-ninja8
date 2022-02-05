import React from 'react'
import Button from '@mui/material/Button';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Backdrop } from '@mui/material';

const Header = styled.header`
background-color: #f5f4fc;
height: 12vh;
display: flex;
padding: 15px;
margin: auto;
justify-content: space-between;
align-items: center;
`
const DivHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 40px;
`
const DivBotoes = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
`
const Botoes = styled.button`
margin-left: 8px;
`
export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Header>
        <Button>
        <img src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=82cfc039-d5ca-492a-943b-e315609ce8d4&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2" width="80px"
        onClick={this.props.handleHomePage}></img></Button>
        <Button>
          <ShoppingCartIcon color="primary" onClick={this.props.handleCartPage}>Carrinho</ShoppingCartIcon>
            </Button>
        </Header>
        <DivHome>
        <h1>LabeNinjas</h1>
        <h3>O talento certo no momento certo</h3></DivHome>
        <DivBotoes>
        <Botoes><Button variant="contained" onClick={this.props.handleRegisterPage}>Seja um Ninja</Button></Botoes>
        <Botoes><Button variant="contained" onClick={this.props.handleContractPage}>Contrate um Ninja</Button></Botoes>
        </DivBotoes>
      </div>
      
    )
  }
}