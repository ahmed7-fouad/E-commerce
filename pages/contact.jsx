import React ,{useRef} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/commonSection';
import { Container , Row , Col } from 'reactstrap';
import '../styles/contact.css';
import { Link } from 'react-router-dom';
const Contact=()=>{
    return(
        <Helmet title=' Contact'>
            <CommonSection title='Contact'/>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h3>Our Location</h3>
                            <hr className='w-50' />
                            <p>Tasty Treat
                                45 Sunrise Ave, Coventry, CV4 4ZZ
                                </p>
                                <h5>Have any querry:</h5>
                                <hr className='w-25'/>
                                <p>Call us on : (0247) 7989639</p>
                               <iframe className='prand__position w-100'src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38965.48545765648!2d-1.556762!3d52.382335000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774ada4acae815%3A0x3ba856da30b576fd!2sCoventry%20CV4%207EZ%2C%20UK!5e0!3m2!1sen!2sus!4v1665206969237!5m2!1sen!2sus'></iframe>
                                <h6 class="text__links">You can contact us through these numbers and our pages on social media. <span>&gt;&gt;</span> </h6>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
)
}
export default Contact;

