import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <div className="header-main">
                <Navbar >
                     <img src="/assets/images/logo.png" alt="image" className="header-logo"/>
                </Navbar>
                <Navbar variant="light" bg="light">
                    <div >
                        <NavbarBrand href="#home" className="header-menu">Home</NavbarBrand>
                        <NavbarBrand href="#about" className="header-menu">About</NavbarBrand>
                        <NavbarBrand href="#gallery" className="header-menu">Gallery</NavbarBrand>
                        <NavbarBrand href="#contact" className="header-menu">Contact Us</NavbarBrand>
                    </div>
                </Navbar>       
            </div>
        );
    }   
}
export default Header;
