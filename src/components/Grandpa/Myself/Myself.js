import React from 'react';
import Special from '../../Special/Special';

const Myself = ({house, ring}) => {
    return (
        <div>
            <h1>Myself</h1>
            <p><small>House : {house}</small></p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;