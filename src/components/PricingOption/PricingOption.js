import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-8 rounded-lg'>
            <h2 className='bg-indigo-300 p-4 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}
                    ></Benefit>)
                }
            </div>
            <button className='bg-green-400 flex w-full justify-center items-center hover:text-white py-2 mt-4 rounded'>
                Buy Now<ArrowRightIcon className='w-4 h-4 ml-1'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;