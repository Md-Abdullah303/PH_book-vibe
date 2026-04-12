import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import Books from '../../Books/Books';

const fetchBooks = fetch('/booksData.json').then(res=> res.json());


const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Books fetchBooks={fetchBooks}></Books>
        </div>
    );
};

export default HomePage;