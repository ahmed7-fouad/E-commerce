import React from 'react';
import { useRef ,useEffect} from 'react';
import logo from '../../assets/images/res-logo.png'
import {Container ,Row, Col} from 'reactstrap';
import {NavLink ,Link} from 'react-router-dom';
import '../../styles/header.css';
import { useSelector , useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/cartUislice';
const nav_links=[
    {display:'Home',path:'/home'},
    {display:'Cart',path:'/cart'},
    {display:'Contact',path:'/contact'},
    {display:'About',path:'/about'},
]
const Header = ()=>{
    const menuRef=useRef(null);
    const headerRef=useRef(null);
    const totalQuantity=useSelector(state=>state.cart.totalQuantity)
    const dispatch = useDispatch()

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    const toggleCart = () => {dispatch(cartUiActions.toggle())};
        
    useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                
                headerRef.current.classList.add('header__shrink');   
            }
            else{
                headerRef.current.classList.remove('header__shrink');   
            }
        })

        return _=> window.removeEventListener('scroll')
    },[]);
    
    return(
    <header className="header" ref={headerRef}>
        <Container>
            <div className=" nav_wrapper d-flex align-items-center justify-content-between">
                 <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Tasty Treat</h5>
                 </div>
                    
        {/* -------------- menu ----------- */}
                <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                    <div className='menu d-flex align-items-center gap-5'>
                        {nav_links.map((item,index)=>(
                            <NavLink 
                             to={item.path} 
                             key={index}
                            className={(navClass) => navClass.isActive? 'active__menu':''}

                            >    
                                {item.display}
                            </NavLink>
                        ))}
                    </div>
                </div>
                
        {/* -------------- nav right icons ----------- */}

                <div className='nav__right d-flex align-items-center gap-4'>
                    <span className="cart__icon" onClick={toggleCart}>
                        <i class="ri-shopping-basket-line"></i>
                        <span className='cart__badge'>{totalQuantity}</span>
                    </span>


                    <span className='user'>
                        <Link to="/login"><i class="ri-user-line"></i></Link>
                    </span>  


                    <span className='mobile__menu' onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                    </span>
                
            </div>
        </div>
        </Container>
    </header>
    )
}
export default Header