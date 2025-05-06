import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    const links = <>
    <li><Link to='/updateCoffee'>update</Link></li>
    <li><Link to='/addCoffee'>Add Coffee</Link></li>
</>
    return (
     
            <div>
                  {links}
                <Outlet></Outlet>
              
            </div>
    
    );
};

export default Home;