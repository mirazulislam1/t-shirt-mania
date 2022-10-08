import React from 'react';
import './TShirt.css'
const TShirt = ({tshirt,handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default TShirt;