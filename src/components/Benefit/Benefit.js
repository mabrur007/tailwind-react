import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/solid";

const Benefit = (props) => {
    const benefit = props.benefit;
    return (
      <p className='flex items-center'>
            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500"></CheckCircleIcon>
            {benefit}
      </p>
    );
};

export default Benefit;