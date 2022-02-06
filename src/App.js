import React from "react";
import CartPage from "./pages/CartPage/CartPage";
import ContractDetailPage from "./pages/ContractDetailPage/ContractDetailPage";
import ContractPage from "./pages/ContractPage/ContractPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";

class App extends React.Component {
  state = {
    currentScreen: "home",
    cart: [],
  };

  handleHomePage = () => {
    this.setState({ currentScreen: "home" });
  };

  handleRegisterPage = () => {
    this.setState({ currentScreen: "register" });
  };

  handleContractPage = () => {
    this.setState({ currentScreen: "contract" });
  };

  handleContractDetailPage = () => {
    this.setState({ currentScreen: "contractdetail" });
  };

  handleCartPage = () => {
    this.setState({ currentScreen: "cart" });
  };

  addToCart = (job) => {
    const updateCart = [...this.state.cart, job];
    this.setState({ cart: updateCart });
  };

  deleteFromCart = (id) => {
    const updateCart = this.state.cart.filter((item) => {
      return item.id !== id;
    });
    this.setState({ cart: updateCart });
  };
  selectPage = () => {
    switch (this.state.currentScreen) {
      case "home":
        return (
          <HomePage
            handleRegisterPage={this.handleRegisterPage}
            handleContractPage={this.handleContractPage}
          />
        );
      case "register":
        return (
          <RegisterPage
            handleHomePage={this.handleHomePage}
            handleCartPage={this.handleCartPage}
          />
        );
      case "contract":
        return (
          <ContractPage
            handleHomePage={this.handleHomePage}
            handleCartPage={this.handleCartPage}
            handleContractDetailPage={this.handleContractDetailPage}
          />
        );
      case "contractdetail":
        return (
          <ContractDetailPage
            handleHomePage={this.handleHomePage}
            handleCartPage={this.handleCartPage}
            handleContractPage={this.handleContractPage}
          />
        );
      case "cart":
        return (
          <CartPage
            handleHomePage={this.handleHomePage}
            handleCartPage={this.handleCartPage}
            handleContractPage={this.handleContractPage}
          />
        );
      default:
        return <HomePage />;
    }
  };

  render() {
    return <ThemeProvider theme={theme}>{this.selectPage()}</ThemeProvider>;
  }
}

export default App;
