import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../ea.svg';
import './header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="secondary" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img className='img-size' src={img} alt=''></img> <span className='logo-name'>Excellence Academy</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
  <Form className="d-flex flex-fill">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="primary">Search</Button>
    </Form>
    <Nav className='ms-5'>
      <NavLink className='me-3 text-white nav-menu' to="/home">Home</NavLink>
      <NavLink className='me-3 text-white nav-menu' to="/courses">Our Courses</NavLink>
      <NavLink className='me-3 text-white nav-menu' to="/about">About Us</NavLink>
      <NavLink className='text-white nav-menu' to="/contact">Contact Us</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;