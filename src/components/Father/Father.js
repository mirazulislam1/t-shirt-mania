import React from 'react';
import Brother from '../Grandpa/Myself/Brother/Brother';
import Sister from '../Grandpa/Myself/Brother/Sister/Sister';
import Myself from '../Grandpa/Myself/Myself';

const Father = ({house}) => {
    return (
        <div>
            <h1>Father</h1>
            <p><small>House : {house}</small></p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;