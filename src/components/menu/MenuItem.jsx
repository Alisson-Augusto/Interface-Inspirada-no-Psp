import React from 'react';
import './MenuItem.css';

const MenuItem = props => (
    <div className="menu-item">
        <i className={`material-icons ${props.size || 'md-36'}`}>
            {props.icon}
        </i>
        <div className="menu-item-header">
            <span className={`title ${props.desc ? 'hr' : ''}`}>{props.title}</span>
            <p>{props.desc}</p>
        </div>
    </div>
)

export default MenuItem;