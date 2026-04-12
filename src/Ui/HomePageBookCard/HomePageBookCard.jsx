import React from 'react';
import { CiStar } from 'react-icons/ci';

/***
 * author:"J.R.R. Tolkien"
bookId:6
bookName:"The Hobbit"
category:"Fantasy"
image:"https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg"
publisher:"Allen & Unwin"
rating:4.9
review:"'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
tags:(2) ['Adventure', 'Epic']
totalPages: 310
yearOfPublishing:1937
 */

const HomePageBookCard = ({ book }) => {
    console.log(book);
    return (
        <div>
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
        </div>
    );
};

export default HomePageBookCard;