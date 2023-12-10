// pages/index.tsx
import React from 'react';
import Button from '../components/button';
import articlesExample  from '../static/articleExample';
import CardBlog from '../components/blogCard';

export default function Home({ articles }): React.JSX.Element {

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.innerText);
    };
    return (
        <>
            <Button
                style="primary"
                text="primary button"
                onClick={ () => handleClick('primary button') }
            />
            <div className='section'>
                { articles && articles.map((article) => CardBlog({ post: article }))
                }
            </div>
            <div className='section' style={ { flexDirection: 'column' } }>
                <h1>Boilerplate SASS 7-1</h1>
                <h2>Text H2</h2>
                <h3>Text H3</h3>
                <h4>Text H4</h4>
                <h5>Text H5</h5>
                <h6>Text H6</h6>
                <p>Paragraph</p>
                <a href="#">Link</a>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const articles = articlesExample;

    return {
        props: { articles },
    };
};

