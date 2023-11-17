import React from 'react';

const Button = ({ type, text, onClick }) => {
    return (
        <button type="button" onClick={onClick} className={`button ${type}`}>
            {text}
        </button>
    );
};

export default Button;
