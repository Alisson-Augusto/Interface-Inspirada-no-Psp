import React from 'react';
import './MenuGeralItem.css';
import MenuItem from './MenuItem';

const MenuGeralItem = props => {
    let children = props.children;
    if(props.children === undefined) {
        children = <MenuItem 
                    title="None"
                    icon="block"/>
    }

    return (
        <div className="menu-geral-item" 
        key={props.index}
        onClick={_ => props.setActivate(props.index)}>

            <div className="menu-geral-category">
                <i className={`material-icons ${props.size || 'md-48'}`}>
                    {props.icon}
                </i>
                {props.activate ? <span>{props.title} </span> : null}
            </div>
            <div className="menu-container">
                {props.activate ? children : null}
            </div>

        </div>
    )
}

export default MenuGeralItem;