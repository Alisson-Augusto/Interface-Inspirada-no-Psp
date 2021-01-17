import React, { useState } from 'react';
import './MenuGeral.css';
import navegation_sound from '../../sound/navegation.wav';

const MenuGeral = props => {

    const [activate, setActivate] = useState(props.activate || 0);
    const audio = new Audio(navegation_sound);

    const handleActivate = v => {
        audio.play()
        setActivate(v);
    }

    return (
        <div className="menu-geral">
            {React.Children.map(props.children,
            (child, i) => {
                if (activate === i) {
                    return React.cloneElement(child, {...child.props, index: i, setActivate: handleActivate, activate: true})
                }
                return React.cloneElement(child, {...child.props, index: i, setActivate: handleActivate})    
            })}
        </div>
    )
}

export default MenuGeral;