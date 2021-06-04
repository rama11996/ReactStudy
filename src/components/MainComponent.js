import '../App.css';
import Menu from './MenuComponent';
import Header from './Header';
import About from './AboutComponet';
import { DISHES } from '../shared/dishes';
import { ABOUT } from '../shared/About';
import DishDetail from './DishDetailComponent';
import { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      about: ABOUT,
      selectedDish: null
    };

  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
  render() {
    return (
      <div >
          <Header/> 
          <div className="hero-banner">
            <img src="/assets/images/banner_image.jpg" alt="image" className="banner-image"/>
          </div>
          <Menu dishes={this.state.dishes} onClick = { (dishId) => this.onDishSelect(dishId)} />
          <DishDetail dish = { this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
          <About about={this.state.about} />
          
  
      </div>
    );
  }
  
  
}


export default Main;
