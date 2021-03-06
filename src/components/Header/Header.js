import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import img from '../../ea.svg';
import './header.css'

const Header = () => {
    return (
        <div>
          {/* header section with logo navbar  */}
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="secondary" variant="dark">
  <Container>
  <NavLink to="/home"><img className='img-size' src={img} alt=''></img> </NavLink>
  <Link className='logo-name me-5 ms-2' to="/home"><strong>Excellence Academy</strong></Link>
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