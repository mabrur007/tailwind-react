import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricintOptions = [
      {
        id: 1,
        name: "Free",
        price: 0,
        benefits: [
          "lifetime free",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
      {
        id: 2,
        name: "Regular",
        price: 9.99,
        benefits: [
          "everything on Regular",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
      {
        id: 1,
        name: "Premium",
        price: 19.99,
        benefits: [
          "everything on Premium",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
    ];
    return (
        <div className='bg-indigo-200 p-20 mt-8'>
            <h1 className='text-6xl uppercase'>Best deals of the town.</h1>
            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta, maxime et aut accusamus consequatur animi molestias eligendi officia harum voluptatibus vitae assumenda in eos laboriosam. Ipsa nobis exercitationem architecto?</p>
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    pricintOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;