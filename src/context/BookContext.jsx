import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();
const BookProvaider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [readlist, setReadlist] = useState([]);
    const handleAddToRead = (currentBook) => {

        const isExist = readlist.find(book => book.bookId == currentBook.bookId);

        // console.log('currentBook :', currentBook)
        if (isExist) {
            toast.error("This book already exist");
        } else {
            setReadlist([...readlist, currentBook]);
            toast.success("Added to readlist");
        }
        console.log(readlist, "readlist");
    }

    
    const handleAddToWishlist = (currentBook)=>{
        const isExist = wishlist.find(book=> book.bookId == currentBook.bookId);
        const isExistInReadlist = readlist.find((book)=> book.bookId == currentBook.bookId);
        
        if(isExist){
            toast.error("This book are all ready in wishlist.");
        }else if(isExistInReadlist){
            toast.error("It's already in Read list.");
        }else if(!isExistInReadlist){
            setWishlist([...wishlist, currentBook]);
            toast.success("Added to wishlist");
        }

        console.log(wishlist, "wishlist");
    }

    const data = {
        test: 'demo',
        handleAddToRead,
        readlist,
        setReadlist,
        handleAddToWishlist,
        wishlist,
        setWishlist,
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvaider;