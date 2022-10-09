import React from 'react';
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css'
import {Link} from 'react-router-dom';
const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'md='4'sm='6'>
                        <div className="logo footer__logo text-start">
                            <img src={logo} alt="logo" />
                            <h5>Tasty Treat</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Repudiandae odit 
                                tempore explicabo sapiente nobis dolor illo 
                            </p>
                        </div>
                  </Col>
                    <Col lg='3'md='4'sm='6'>
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className='deliver__time-list'>
                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>

                             <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Friday - Saturday</span>
                                <p>off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3'md='4'sm='6'>
                        <h5 className="footer__title">Contact</h5>
                        <ListGroup className='deliver__time-list'>

                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Location Egypt Cairo Elkhamseen</span>
                            </ListGroupItem>

                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Phone: 01000545757</span>
                            </ListGroupItem>

                             <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Email: af981526@gmail.com</span>
                                <p>off day</p>
                            </ListGroupItem> 
                        </ListGroup>
                    </Col>

                    <Col lg='3'md='4'sm='6'>
                             <h5 className="footer__title">Newsletter</h5>
                             <p>subscript our newsletter</p>
                             <div className='newsletter'>
                                <input type="email" placeholder='Enter your email'/>
                                <span><i class="ri-send-plane-line"></i></span>
                             </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg='6' md='6'>
                        <p className='copyright'>Copyright - 2022, website made by Ahmed Fouad. All Rights Reserved.</p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
                            <p className='m-0'>follow</p>
                             <span><a href='https://www.facebook.com/profile.php?id=100009686442660'> <i class="ri-facebook-line"></i></a></span>

                            <span><a href='https://github.com/ahmed7-fouad'><i class="ri-github-line"></i></a></span>

                            <span><a href='https://www.linkedin.com/in/ahmed-fouad-5227b0218/'><i class="ri-linkedin-line"></i></a></span> 
                        </div>
                    </Col> 
                    <Col lg='6' md='6'></Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;