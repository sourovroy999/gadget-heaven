import React from 'react';

const Gadget = ({singleGadget}) => {
    const {product_title}=singleGadget;

    return (
        <div>
            <h1>{product_title}</h1>
        </div>
    );
};

export default Gadget;