import React from 'react';

const Button = ({ style, text, onClick }) => (
        <button type="button" onClick={onClick} className={`button ${style}`}>
            {text}
        </button>
    );

export default Button;
