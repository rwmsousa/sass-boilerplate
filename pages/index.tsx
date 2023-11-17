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
            <p>Esta é a página inicial do seu projeto Next.js.</p>
            <Button
                type="primary"
                text="Botão primário!"
                onClick={() => handleClick('Botão primário!')}
            />
        </div>
    );
};

export default Home;
