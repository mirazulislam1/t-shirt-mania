import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item !!!</p>
    }
    else{
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h2>Order summary</h2>
            <p>Order quantity : {cart.length}</p>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveItem(tshirt)}>remove</button></p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;