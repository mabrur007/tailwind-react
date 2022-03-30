import React from 'react';

const PricingOption = (props) => {
    const { name, price } = props.option;
    return (
        <div className='bg-white p-8 rounded-lg'>
            <h2 className='bg-indigo-300 p-4 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='font-bold text-gray-500'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;