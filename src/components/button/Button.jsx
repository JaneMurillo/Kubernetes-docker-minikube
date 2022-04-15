import React from 'react';
import './Button.css';

const STYLES = ['button-transparent', 'button-orange'];

export function Button({type, text, onClick}) {
    const buttonStyle = STYLES.includes(type) ? type : STYLES[0];

    return(
        <button className={`${buttonStyle}`} onClick={onClick}>
            {text}
        </button>
    )
}
