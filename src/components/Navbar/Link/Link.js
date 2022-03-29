import React from 'react';


const Link = (props) => {
    const { name, link } = props.route;
    return (
      <li className='mx-12 my-4'>
            <a href={ link }>{ name }</a>
      </li>
    );
};

export default Link;