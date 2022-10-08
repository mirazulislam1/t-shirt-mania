import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handleAddToCart = tshirt =>{
       const exists = cart.find(ts => ts._id === tshirt._id)
       if(exists){
        alert('t-shirt already added')
       }
       else{
        const newCart = [...cart, tshirt]
        setCart(newCart);
        // alert('successfully added')
       }
    }
    const handleRemoveItem = tshirt =>{
        const remainig = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remainig)
        
    }
    return (
        <div className='home-container'>
        <div className='tshirt-container'>
            {
                tShirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt} 
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
            }
        </div>
           <div className="cart-container">
               <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;