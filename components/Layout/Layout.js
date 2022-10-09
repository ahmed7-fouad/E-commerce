import React from 'react';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routers from '../../routes/routers'
import Carts from '../UI/cart/Carts.jsx';
import { useSelector  } from 'react-redux';
const Layout=()=>{ 

    const showCart = useSelector(state=> state.cartUi.cartIsVisible);
    return(

        <div>
        <Header />

        {showCart && <Carts />}
        
           <div>
             <Routers />
            </div>
        <Footer />
        </div>
    )
}
export default Layout;