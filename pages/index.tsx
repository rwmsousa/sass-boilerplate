// pages/index.tsx
import React from 'react';
import Button from '../components/button';
import CardBlog from '../components/blogCard';
import { Post } from '../types';
import  getArticles  from '../providers/api';

interface HomeProps {
    posts: Post[];
}

export default function Home({ posts }: HomeProps){

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();

    };

    return (
        <>
            <Button
                className="primary"
                text="primary button"
                onClick={ (event) => handleClick(event) }
            />
            <div className='section'>
                { posts && posts.map((article: Post) => <CardBlog key={ article.id } post={article}/>)
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
    const posts = await getArticles();

    return {
        props: { posts },
    };
};

