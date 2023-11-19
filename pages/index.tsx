// pages/index.tsx
import React from 'react';
import Button from '../components/Button';

const Home: React.FC = () => {
    const handleClick = (msg: string) => {
        console.log(msg);
    };

    return (
        <div>
            <h1>Boilerplate SASS 7-1</h1>
            <h2>Texto H2</h2>
            <h3>Texto H3</h3>
            <h4>Texto H4</h4>
            <h5>Texto H5</h5>
            <h6>Texto H6</h6>
            <p>Parágrafo</p>
            <p>
                <a href="#">Link</a>
            </p>
            <Button
                type="primary"
                text="Botão primário!"
                onClick={() => handleClick('Botão primário!')}
            />
        </div>
    );
};

export default Home;
