import React from 'react';
import './Nav.css';
import Clock from './Clock';
import Battery from './Battery';

const Nav = _ => {
    const d = new Date();

    const data = `${d.getMonth()+1}/${d.getDate()}`;

    return (
        <nav>
            <span>{data}</span>
            <Clock />
            <Battery />
        </nav>
    )
}


export default Nav;
