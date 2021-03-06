import React, { useState } from 'react';
import Link from './Link/Link';
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {id:1, name:'Home', link:'/home'},
        {id:2, name:'About', link:'/about'},
        {id:3, name:'Service', link:'/service'},
        {id:4, name:'Product', link:'/product'},
        {id:5, name:'Contact', link:'/contact'}
    ]
    return (
      <nav className='bg-indigo-200'>
        <div
          onClick={() => setOpen(!open)} className="h-8 w-8 md:hidden">
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6':'top-[-220px]'}`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default Navbar;