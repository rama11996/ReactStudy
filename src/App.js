import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Header from './components/Header';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div >
          <Header/> 
          <Menu dishes={this.state.dishes} />
  
      </div>
    );
  }
  
  
}


export default App;
