import React, { use } from 'react';
import HomePageBookCard from '../../Ui/HomePageBookCard/HomePageBookCard';

const Books = ({fetchBooks}) => {
    const booksData = use(fetchBooks);
    // console.log(booksData)
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-3xl text-center font-bold py-5'>Book</h1>
            <div className="grid  grid-cols-3 gap-4">
                {
                    booksData.map((book)=> <HomePageBookCard key={book.bookId} book={book}></HomePageBookCard>)
                }
            </div>
        </div>
    );
};

export default Books;