import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1>Uncle</h1>
            <p><small>House : {house}</small></p>
            <p><small>money : {money}</small></p>
        </div>
    );
};

export default Uncle;