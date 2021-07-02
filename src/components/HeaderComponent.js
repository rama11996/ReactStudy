import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, Jumbotron, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom'


class Header extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Form Submitted by" + this.username.value)
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" alt="Logo" height="30" width="50"/>
                        </NavbarBrand> 
                        <Collapse isOpen= {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/home" className="nav-link">
                                        <span className="fa ha-home fa-lg">Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/about-us" className="nav-link">
                                        <span className="fa ha-info fa-lg">About Us</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/menu" className="nav-link">
                                        <span className="fa ha-list fa-lg">Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact-us" className="nav-link">
                                        <span className="fa ha-address-card fa-lg">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                                
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
        <Modal isOpen = {this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit = {this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username" > Username</Label>
                        <Input type="text" id="username" name="username"
                         innerRef = { (input) => this.username = input}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password" > Password </Label>
                        <Input type="password" id="password" name="password"
                        innerRef = { (input) => this.password = input}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label check>
                            <Input type="checkbox" name="remember"
                            innerRef={(input) => this.remember = input} />
                            Remember Me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </Form>
            </ModalBody>
        </Modal>
    </React.Fragment>
        );
    }   
}
export default Header;
