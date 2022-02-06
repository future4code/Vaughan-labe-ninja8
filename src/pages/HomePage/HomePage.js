import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Backdrop } from "@mui/material";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Book } from "@mui/icons-material";

const Header = styled.header`
  background-color: #f5f4fc;
  height: 7vh;
  display: flex;
  padding: 15px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
const DivHome = styled.div`
  display: flex;
  background-color: #ebebf2;
`;
const DivBotoes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Botoes = styled.button`
  margin-left: 8px;
`;

const NavBar = styled.ul`
  display: flex;
  list-style: none;
  color: #7660a6;
  font-weight: 700;
`;

const NavBarItems = styled.li`
  display: flex;
  padding: 15px;
  align-items: center;
`;

const BannerImage = styled.img`
  height: 35vh;
  width: 50%
  justify-content: left;
`;

const BannerText = styled.div`
  color: #7660a6;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
`;

const BannerParagraph = styled.p`
  padding: 3vh;
`;

const HireANinjaTitleSection = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  color: #ebebf2;
  justify-content: center;
  align-items: center;
  background-color: #7660a6;
  font-size: 2.3rem;
  font-weight: 900;
`;

const BecomeANinjaTitleSection = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  color: #7660a6;
  justify-content: center;
  align-items: center;
  background-color: #ebebf2;
  font-size: 2.3rem;
  font-weight: 900;
`;

const HireANinjaBenefitsContainer = styled.div`
  background-color: #7660a6;
  height: 2fr;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BecomeANinjaBenefitsContainer = styled.div`
  background-color: #ebebf2;
  height: 2fr;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BenefitsContainerBecome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #7660a6;
  margin-left: 32px;
  flex-wrap: wrap;
`;

const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ebebf2;
  margin-left: 32px;
  flex-wrap: wrap;
`;

const BenefitsIcons = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
`;

const HireButton = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  color: #ebebf2;
  justify-content: center;
  align-items: center;
  background-color: #7660a6;
`;

const BecomeButton = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  color: #7660a6;
  justify-content: center;
  align-items: center;
  background-color: #ebebf2;
`;

const Footer = styled.footer`
  display: flex;
  background-color: #7660a6;
  padding: 1em 2em;
  justify-content: space-between;
  // border-top: 1px solid #cec5f0;
  @media (max-width: 450px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const RightFooter = styled.div`
  color: #ebebf2;
  font-weight: 700;
  @media (max-width: 450px) {
    padding-top: 1em;
    text-align: center;
    margin-left: 0;
  }
`;

const LeftFooter = styled.div`
  color: white;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  p {
    margin: 0;
  }
  @media (max-width: 450px) {
    margin-left: 0;
  }
`;

const SocialMediaLogos = styled.img`
  max-width: 2em;
  max-height: 2em;
  padding: 0.5em;
`;

const FooterIcon = styled.img`
  max-width: 4em;
  max-height: 4em;
  padding: 1em;
`;

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Button>
            <img
              src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=82cfc039-d5ca-492a-943b-e315609ce8d4&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2"
              width="80px"
              onClick={this.props.handleHomePage}
            ></img>
          </Button>
          <NavBar>
            <Button>
              <NavBarItems onClick={this.props.handleContractPage}>
                Contrate um Ninja
              </NavBarItems>
            </Button>
            <Button>
              <NavBarItems onClick={this.props.handleRegisterPage}>
                Seja um Ninja
              </NavBarItems>
            </Button>
            <Button>
              <NavBarItems>Contato</NavBarItems>
            </Button>
          </NavBar>
          <Button>
            <ShoppingCartIcon
              color="primary"
              onClick={this.props.handleCartPage}
            >
              Carrinho
            </ShoppingCartIcon>
          </Button>
        </Header>
        <DivHome>
          <BannerImage src="https://cdn.pixabay.com/photo/2018/07/18/11/59/handyman-3546194_1280.jpg" />
          <BannerText>
            <h1>LabeNinjas</h1>
            <BannerParagraph>O talento certo no momento certo</BannerParagraph>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.props.handleContractPage}
            >
              Contrate Agora
            </Button>
          </BannerText>
        </DivHome>
        <HireANinjaTitleSection>
          <p>Precisa de um serviço? Nossos Ninjas estão aqui para ajudar!</p>
        </HireANinjaTitleSection>
        <HireANinjaBenefitsContainer>
          <BenefitsContainer>
            <BenefitsIcons>
              <BookOnlineIcon />
            </BenefitsIcons>
            <h3>Contratação 100% online</h3>
            <span>Sem papelada, sem burocracia</span>
          </BenefitsContainer>
          <BenefitsContainer>
            <BenefitsIcons>
              <AssignmentIcon />
            </BenefitsIcons>
            <h3>Os melhores profissionais</h3>
            <span>
              Busque entre mais de 500 prestadores de serviços cadastrados
            </span>
          </BenefitsContainer>
          <BenefitsContainer>
            <BenefitsIcons>
              <ChatIcon />
            </BenefitsIcons>
            <h3>Praticidade</h3>
            <span>Negocie e agende diretamente com os profissionais</span>
          </BenefitsContainer>
          <BenefitsContainer>
            <BenefitsIcons>
              <PriceCheckIcon />
            </BenefitsIcons>
            <h3>Acesso grátis</h3>
            <span>
              Você não paga nada para buscar e negociar no Labeninjas!
            </span>
          </BenefitsContainer>
        </HireANinjaBenefitsContainer>
        <HireButton>
          <Button variant="contained" onClick={this.props.handleContractPage}>
            Quero Contratar
          </Button>
        </HireButton>
        <BecomeANinjaTitleSection>
          <p>Quer oferecer seus serviços? Seja um Ninja!</p>
        </BecomeANinjaTitleSection>
        <BecomeANinjaBenefitsContainer>
          <BenefitsContainerBecome>
            <BenefitsIcons>
              <BookOnlineIcon />
            </BenefitsIcons>
            <h3>Muitas oportunidades</h3>
            <span>Receba novos pedidos a toda hora, direto no celular</span>
          </BenefitsContainerBecome>
          <BenefitsContainerBecome>
            <BenefitsIcons>
              <ChatIcon />
            </BenefitsIcons>
            <h3>Autonomia</h3>
            <span>Negocie e agende diretamente com o cliente</span>
          </BenefitsContainerBecome>
          <BenefitsContainerBecome>
            <BenefitsIcons>
              <PriceCheckIcon />
            </BenefitsIcons>
            <h3>Mais vantagens</h3>
            <span>100% do valor do serviço é seu!</span>
          </BenefitsContainerBecome>
        </BecomeANinjaBenefitsContainer>
        <BecomeButton>
          <Button variant="contained" onClick={this.props.handleRegisterPage}>
            Quero ser um ninja
          </Button>
        </BecomeButton>
        <Footer>
          <LeftFooter>
            <FooterIcon
              src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=82cfc039-d5ca-492a-943b-e315609ce8d4&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2"
              width="80px"
              onClick={this.props.handleHomePage}
            />
            <p>LabeNinjas©</p>
          </LeftFooter>
          <RightFooter>
            <div>Contato</div>
            <p>Rua dos Ninjas, 1000</p>
            <p>labeninjas@labenu.com</p>
            <span>
              <a href="https://twitter.com/login?lang=pt" target="_blank">
                <SocialMediaLogos
                  src="https://www.flaticon.com/br/icone-premium/twitter_3669691?term=twitter&page=1&position=1&page=1&position=1&related_id=3669691&origin=search"
                  alt="ícone da rede social Twitter"
                />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <SocialMediaLogos
                  src="https://www.flaticon.com/br/icone-premium/facebook_3670271?term=facebook&page=1&position=4&page=1&position=4&related_id=3670271&origin=search"
                  alt="ícone da rede social Facebook"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <SocialMediaLogos
                  src="https://www.flaticon.com/br/icone-premium/instagram_3938052?term=instagram&page=1&position=15&page=1&position=15&related_id=3938052&origin=search"
                  alt="ícone da rede social instagram"
                />
              </a>
            </span>
          </RightFooter>
        </Footer>
      </div>
    );
  }
}
