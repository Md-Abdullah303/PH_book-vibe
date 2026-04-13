import React from 'react';

const EmptyMsgForListedBooks = () => {
    return (
        <div className='bg-base-300 text-center text-4xl font-semibold py-25 w-[70%] mx-auto rounded-xl'>
            <h1>Empty, there are no Books</h1>
            <p className='text-lg mt-5 text-gray-500'>Go and add some books</p>
        </div>
    );
};

export default EmptyMsgForListedBooks;