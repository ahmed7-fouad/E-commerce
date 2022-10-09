import React ,{useRef} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/commonSection';
import { Container , Row , Col } from 'reactstrap';
import '../styles/about.css';
import cheif1 from '../assets/images/sh1.jpg';
import cheif2 from '../assets/images/sh2.jpg';
import cheif3 from '../assets/images/sh3.jpg';
import { Link } from 'react-router-dom';
const About=()=>{

    return(
        <Helmet title=' About'>
            <CommonSection title=' About'/>
            <section>
                <Container>
                    <Row>
                        <Col>
                        <h2 className='About__main-title mb-3'>Who We Are</h2 >
                        <p className='About__main-text'>Tasty Treat speciality pizza and burgers eatery and takeaway was established in 2007 and we have built a reputation for the fresh taste of our food and our in-house and take away service.
                            Quality home made burgers to enjoy in our restaurant or take away. We only use the best and freshest ingredients to offer the authentic home-made American burgers that our loyal customers have endorsed for years.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section class="chefs">
            <Container>
                <Row>
            <div id="chefs" className="parallax pricing">
            <div className="container inner">

            <h3 className="section-title text-center mt-5 mb-2">Our Chefs</h3>
            <p className="lead main text-center mb-5">There is no sincerer love than the love of food!</p>
            
            <div className="row text-center chefs">
                <Col>
                    <div className="col-wrapper mb-3">
                        <div className="icon-wrapper">
                            <img className='mb-3'src={cheif1} />
                        </div>
                        <h3>Saransh Goila</h3>
                        <p>Vivamus sagittis lacuson augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum ultricies vehicula.</p>
                    </div>
                
                </Col>

                <Col>
                
                    <div className="col-wrapper mb-3">
                        <div className="icon-wrapper">
                            <img className='mb-3' src={cheif2} />
                        </div>
                        <h3>Jane Doe</h3>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient monte nascetur ultricies vehicula. </p>
                    </div>
                
                </Col>

                <Col>
                    <div className="col-wrapper">
                        <div className="icon-wrapper">
                            <img className='mb-3' src={cheif3} />
                        </div>
                        <h3>Anton Mosimann</h3>
                        <p>Curabitur blandit matti tempus porttitor. Donec id elit non mi porta ut gravida at eget metus. Consectetur adipiscing elit ultricies vehicula.</p>
                    </div>
                </Col>
            </div>
            

        </div> 
    </div>
    </Row>
</Container>
</section>
</Helmet>
    )
}
export default About;