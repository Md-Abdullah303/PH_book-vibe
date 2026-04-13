import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { GoPeople } from 'react-icons/go';
import { MdOutlineContactPage } from 'react-icons/md';
import { NavLink } from 'react-router';

const ListedBooksCard = ({ book }) => {
    const {
        author,
        bookId,
        bookName,
        yearOfPublishing,
        totalPages,
        tags,
        rating,
        publisher,
        image,
        category
    } = book;

    return (
        <div className='border border-gray-400 flex  items-center gap-5 p-4 rounded-xl '>
            <div className="bg-base-300 flex w-55 rounded-xl items-center  justify-center p-5">
                <img 
                className='w-[70%] rounded-xl'
                src={image} alt={bookName} />
            </div>
            <div className="space-y-3 flex-1">
                <h1 className=' text-2xl font-bold'>{bookName}</h1>
                <p className=' text-lg font-medium'>By : {author}</p>
                <div className="flex  items-center  gap-4">
                    <h3 className='font-semibold'>Tag </h3>
                    <div className=" space-x-3">
                        {
                            tags.map((tag, ind) => <div
                                key={ind}
                                className="badge badge-soft badge-success">{tag}</div>)
                        }
                    </div>
                    <p className='flex items-center gap-1 text-gray-600'><FiMapPin /> <span> Year of Publishing: {yearOfPublishing}</span></p>
                </div>
                <div className="flex  items-center gap-3 text-gray-700">
                    <div className="flex  items-center gap-2">
                        <GoPeople />
                        <span>Publisher : {publisher}</span>
                    </div>
                    <div className="flex  items-center gap-2">
                        <MdOutlineContactPage />
                        <span>Page {totalPages}</span>
                    </div>
                </div>
                <div className="border-t border-gray-400 py-5 space-x-3">
                    <div className="badge badge-soft badge-info">Category : {category}</div>
                    <div className="badge badge-soft badge-accent">Rating : {rating}</div>
                    <NavLink to={`/booksDetails/${bookId}`} className='btn bg-green-500 rounded-full text-white border-none'>View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;