import { faMapMarkedAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact-part'>
          {/* contact us section  */}
            <h1 >Contact Us</h1>
            <Container >
             <Row>
                <Col xs={6}><iframe src="https://maps.google.com/maps?q=dhanmondi,%20dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="1" style={{"border":'1px', "height":"400px", "weight":"400px"}} allowfullscreen></iframe></Col>
                <Col xs={6}>
                <form action="#" method="POST">

                    <div className="form-group mt-3 d-flex">
                        <b><label for="name">Name:</label></b>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name" required/>
                    </div>
                    <div className="form-group d-flex mt-3">
                        <b><label for="email">Email:</label></b>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" required/>
                    </div>
                    <div className="form-group d-flex mt-3">
                        <b><label for="phone">Phone No:</label></b>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon">+88</span>
                            </div>
                            <input type="tel" className="form-control" id="phone" name="phone" aria-describedby="basic-addon" placeholder="Enter Your Phone Number" required pattern="[0-9]{11}"/>
                        </div>
                    </div>
                    <div className="form-group mt-3 d-flex">
                    <b><label for="desc">Message:</label></b>
                    <textarea className="form-control" id="desc" name="desc" rows="2" required minlength="6" placeholder="How May We Help You ?"></textarea>
                    </div>
                    <Button type="submit" className="btn btn-danger-gradiant text-white mt-2 border-0 py-2 px-3"><span> SUBMIT NOW </span></Button>
                </form>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneSquare} />
                  </div>
                  <div>
                    <h5 className='ms-2'>+8801885458785</h5>
                  </div>
                </div>
                  <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div className='ms-2'>
                    <p>
                    Road No. 1, Dhanmondi, Dhaka
                      <br /> Dhaka Division, Bangladesh
                    </p>
                  </div>
                </div>
                </Col>
             </Row>
            </Container>
        </div>
    );
};

export default Contact;