import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';



const HomePageBookCard = ({ book }) => {
    console.log(book);
    return (
        <Link to={`/booksDetails/${book.bookId}`}>
            <div className="card bg-base-100 p-4 shadow-sm">
                <figure className='bg-base-300 rounded-xl py-4'>
                    <img
                        className='h-40'
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">
                    <div className=" space-x-3">
                        {
                            book.tags.map(tag=> <div className="badge badge-soft badge-success">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title text-2xl">
                        {book.bookName}
                    </h2>
                    <p className='text-lg'>By : {book.author}</p>
                    <div className="card-actions border-t py-4  justify-between">
                        <div className="text-lg">Fiction</div>
                        <div className="flex  items-center gap-1 text-lg">{book.rating} <CiStar /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HomePageBookCard;