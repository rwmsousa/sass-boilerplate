// pages/index.tsx
import React from 'react';
import Button from '../components/button';

export default function Home(): React.JSX.Element {

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.innerText);
    };
    return (
        <>
            <div className='section' style={ { flexDirection: 'column' } }>
                <h1>Boilerplate SASS 7-1</h1>
                <h2>Text H2</h2>
                <h3>Text H3</h3>
                <h4>Text H4</h4>
                <h5>Text H5</h5>
                <h6>Text H6</h6>
                <p>Paragraph</p>
                <a href="#">Link</a>
                <Button
                    style="primary"
                    text="Button primary"
                    onClick={ () => handleClick('Botão primário!') }
                />
            </div>
        </>
    );
};

