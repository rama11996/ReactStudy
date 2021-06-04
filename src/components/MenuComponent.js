import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class Menu extends Component {
    constructor(props) {
        super(props);
        console.log("Menu Component contructor");
    }

  componentDidMount() {
    console.log("Menu Component DidMount");
  }
    render() {
        const menu = this.props.dishes.map(dish => {
            return(
                <div key={dish.Id} className="home col-12 col-md-5 m-1">
                    <Card  onClick= { () => this.props.onClick(dish.id)} >
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
        </div>
        );
    }
}

export default Menu;