import React ,{useState,useEffect}from 'react';
import Helmet from '../components/Helmet/Helmet'
import {Link,NavLink} from 'react-router-dom';
import {Container ,Row, Col , ListGroup , ListGroupItem} from 'reactstrap';
import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css'
import Category from '../components/UI/category/category'
import '../styles/home.css'
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products.js'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import productCard from '../components/UI/product-card/productCard'
import ProductCard from '../components/UI/product-card/productCard';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png'
import TestimonialSlider from '../components/UI/Slider/testimonialSlider';
const featureData=[
    {
     title:'quick Delivery',
     imgUrl:featureImg01,
     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit necessitatibus perferendis assumenda eaque eveniet.",
    },
    {
     title:'Super Dine In',
     imgUrl:featureImg02,
     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit necessitatibus perferendis assumenda eaque eveniet.",
    },
    {
     title:'Easy Pick Up',
     imgUrl:featureImg03,
     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit necessitatibus perferendis assumenda eaque eveniet.",
    }
]

const Home=()=>{
    const [category ,setCategory]= useState('ALL');
    const [allProducts , setAllproducts]=useState(products);

    useEffect(()=>{
        if(category === 'ALL'){
            setAllproducts(products);
        }
        if(category==='BURGER'){
            const fillteredProducts=products.filter(item=> item.category==='Burger')

                setAllproducts(fillteredProducts);
            }

        if(category==='PIZZA'){
            const fillteredProducts=products.filter(item=> item.category==='Pizza')

                setAllproducts(fillteredProducts);
            }
             if(category==='BREAD'){
            const fillteredProducts=products.filter(item=> item.category==='Bread')

                setAllproducts(fillteredProducts);
            }
        
    },[category])
    const [hotPizza,setHotPizza]=useState([])
    useEffect(()=>{
        const filterPizza = products.filter(item => item.category === 'Pizza');
        const slicePizza = filterPizza.slice(0,4);
        setHotPizza(slicePizza)
    },[])
    return(
<Helmet title=" Home">
<section>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero__content'>
                    <h5 className='mb-3'>Easy way to make an order</h5>
                    <h1 className='mb-4 hero__title'><span>HUNGRY?</span>Just wait <br/> food at<span> your door </span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vero laboriosam hic reprehenderit dignissimos eos ea officiis nobis obcaecati? Esse maiores accusantium voluptatem neque quas dicta ratione a nihil rem?</p>
                    <div className="hero__btns">
                        <button className='order__btn d-flex align-items-center justify-content-between'>Order now<i class='ri-arrow-right-s-line'></i></button>
                    </div>
                    <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                        <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class='ri-car-line'></i></span>No shipping charge</p>

                          <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class='ri-shield-check-line'></i></span>{" "}100$ secure checkout</p>
                    </div>
                </div>             
            </Col>
            <Col lg='6' md='6'>
                <div className="hero__img">
                    <img src={heroImg} alt="hero-img" className='w-100'/>
                </div>
            </Col>
        </Row>
    </Container>
</section>

  <section className='pt-0'>
        <Category/> 
    </section>

    <section>
        <Container>
            <Row className='t-2'>
                <Col lg='12' className='text-center' >
                    <h5 className='feature__subtitle mb-4'>What we serve</h5>
                    <h2 className='feature__title'>Just sit back at home</h2>
                    <h2 className='feature__title'>we will <span>take care</span></h2>
                    <p className='mb-1 mt-4 feature__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus numquam </p>
                    <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequuntur. </p>{""}
                </Col>
                {
                            featureData.map((item,index)=>(
                            <Col lg='4' md='6' sm='6'key={index} className='mt-5'>
                                <div className='feature__item text-center px-5 py-3'>
                                    <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3'/>
                                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                }
              
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                    <h2>Popular Foods</h2>
                </Col>
                <Col lg='12'>
                    <div className='food__category d-flex align-items-center justify-content-center gap-4'>
                        <button className='all__btn active__btn' onClick={()=> setCategory('ALL')}>All</button>

                        <button className='d-flex align-items-center gap-3' onClick={()=> setCategory('BURGER')}><img src={foodCategoryImg01}></img>Burger</button>

                        <button className='d-flex align-items-center gap-3' onClick={()=> setCategory('PIZZA')}><img src={foodCategoryImg02}></img>Pizza</button>

                        <button className='d-flex align-items-center gap-3' onClick={()=> setCategory('BREAD')}><img src={foodCategoryImg03}></img>Bread</button> 
                    </div>
                </Col>
                    {

                    allProducts.map((item)=>(
                        <Col lg='3' md='4' sm='6' xs='6'key={item.id} className='mt-5'>
                            <ProductCard item={item}/>
                        </Col>
                    ))
                    }
            </Row>
        </Container>
    </section>

    <section className='why__choose-us'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <img src={whyImg} alt="tasty"className='w-100' />
                </Col>

                <Col lg='6' md='6'>
                    <div className="tasty">
                        <h2 className='tasty__title mb-4'>why<span> Tasty Treat?</span></h2>
                        <p className='tasty__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque vitae asperiores, fugit, harum officiis laborum veniam nulla rerum voluptatum ullam, facere ut? Quos, neque quam accusamus hic voluptatum impedit?</p>
                        
                            {/* lgr-->1 */}

                        <ListGroup className='mt-4'>
                            <ListGroupItem className='border-0 ps-0'>
                              <p className='choose__us-title d-flex align-items-center gap-2'><i class='ri-checkbox-circle-line'></i>
                                Fresh and tasty foods</p>
                                <p className='tasty__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </ListGroupItem>

                            {/* lgr-->2 */}

                            <ListGroupItem className='border-0 ps-0'>
                               <p className='choose__us-title d-flex align-items-center gap-2'> <i class='ri-checkbox-circle-line'></i>
                                Quality support</p>
                                <p className='tasty__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </ListGroupItem>

                            {/* lgr-->3 */}

                            <ListGroupItem className='border-0 ps-0'>
                               <p className='choose__us-title d-flex align-items-center gap-2'><i class='ri-checkbox-circle-line'></i>Order from any location</p>
                                <p className='tasty__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section className='pt-0'>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                    <h2>Hot Pizza</h2>
                    </Col>
                    {
                        hotPizza.map((item)=>(
                            <Col className='hot__pizza'lg='3' md='4' key={item.id} >
                            <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                    
            </Row>
        </Container> 
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6' >
                    <div className='testimonial '>
                        <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                        <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
                        <p className='testimonial__desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi voluptatum cumque quae totam tempore, quisquam, sit laborum necessitatibus possimus minima architecto sequi similique unde laudantium eveniet harum eum officia at!</p>

                        <TestimonialSlider />
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <img src={networkImg} alt='testimonial-img' className='w-100'></img>
                </Col>
            </Row>
        </Container>
    </section>
</Helmet>
)
}
export default Home;