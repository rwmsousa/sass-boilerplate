import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    className: string;
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, text, onClick }: ButtonProps) => (
    <button type="button" onClick={ onClick } className={ `button ${ className}`}>
            {text}
        </button>
    );

export default Button;
