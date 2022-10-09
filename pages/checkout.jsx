import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Container , Row, Col} from "reactstrap";
import CommonSection from '../components/UI/common-section/commonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/checkout.css'
const Checkout=()=>{

    const [enterName , setEnterName] = useState('');
    const [enterEmail , setEnterEmail] = useState('');
    const [enterNumber , setEnterNumber] = useState('');
    const [enterCountry , setEnterCountry] =useState('');
    const [enterCity , setEnterCity] =useState('');
    const [postalCode ,setPostalCode] =useState('')
    // const [shippingInfo ,setShippingInfo] = useState([])

    const shippingInfo=[];
    const cartTotalAmount = useSelector(state=> state.cart.totalAmount)
    const shippingCost = 30;

    const totalAmount = cartTotalAmount + Number(shippingCost);

    const submitHandler=(e)=>{
        e.preventDefault()
        const userShiippingAdress={
            name:enterName,
            email:enterEmail,
            phone:enterNumber,
            country:enterCountry,
            city:enterCity,
            postalCode:postalCode,
        };

        shippingInfo.push(userShiippingAdress);
        console.log(shippingInfo);
    };
    return(
        <Helmet title = ' Checkout'>
            <CommonSection title="checkout"/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8' md='6' >
                            <h6 className='mb-4'>Shipping Address</h6>
                            {/* name */}
                            <form  className='checkout__form ' onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input type="text" placeholder='Enter your name'
                                    required onChange={(e)=>setEnterName(e.target.value)}
                                     />
                                </div>
                                {/* email */}
                                <div className="form__group">
                                    <input type="email" placeholder='Enter your email'
                                    required onChange={(e)=>setEnterEmail(e.target.value)}
                                     />
                                </div>
                                {/* phone */}
                                   <div className="form__group">
                                    <input type="number" placeholder='Phone number'
                                    required onChange={(e)=>setEnterNumber(e.target.value)}
                                    />
                                </div>
                                {/* country */}
                                <div className="form__group">
                                    <input type="text" placeholder='Country' 
                                    required onChange={(e)=>setEnterCountry(e.target.value)}
                                    />
                                </div>
                                {/* City */}
                                    <div className="form__group">
                                    <input type="text" placeholder='City' 
                                    required onChange={(e)=>setEnterCity(e.target.value)}
                                    />
                                </div>
                                   <div className="form__group">
                                    <input type="number" placeholder='postal code' 
                                    required onChange={(e)=>setPostalCode(e.target.value)}
                                    />
                                </div>
                                
                                <button className='addTOCart__btn'>Payment</button>
                            </form>
                            
                        </Col>

                        <Col lg='4' md='6'>
                            <div className='checkout__bill'>
                            <h6 className='d-flex alig-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotalAmount}</span></h6>
                            <h6 className='d-flex alig-items-center justify-content-between mb-3'>Shipping: <span>${shippingCost}</span></h6>
                            <div>
                                <h5 className='d-flex alig-items-center justify-content-between checkout__total'>Total: <span>${totalAmount}</span></h5>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
)
}
export default Checkout;