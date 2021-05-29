import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Header from './components/Header';
import About from './components/AboutComponet';
import { DISHES } from './shared/dishes';
import { ABOUT } from './shared/About';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      about: ABOUT
    };
  }
  render() {
    return (
      <div >
          <Header/> 
          <div className="hero-banner">
            <img src="/assets/images/banner_image.jpg" alt="image" className="banner-image"/>
          </div>
          <Menu dishes={this.state.dishes} />
          <About about={this.state.about} />
  
      </div>
    );
  }
  
  
}


export default App;
