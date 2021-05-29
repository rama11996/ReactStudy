import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
         selectedDish : null   
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.Name} />
                    <CardBody>
                        <CardTitle>{dish.Title}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            <div></div>
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return(
                <div  className="home col-12 col-md-5 m-1">
                    <Card key={dish.Id} onClick= { () => this.onDishSelect(dish)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle> {dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.state.selectedDish)}
              </div>
            </div>
        </div>
        );
    }
}

export default Menu;