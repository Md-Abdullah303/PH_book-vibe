import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooksCard from '../../../Ui/ListedBooksCard/ListedBooksCard';
import EmptyMsgForListedBooks from '../sheyarUI/EmptyMsgForListedBooks/EmptyMsgForListedBooks';

const BooksPage = () => {
    // const [sortType, setSortType] = useState('');
    const {sortType, setSortType, wishlist, readlist , currentTab, setCurrentTab} = useContext(BookContext);

    const [filterdReadlist, setFilterdReadlist] = useState(readlist);
    const [filterdWishlist, setFilterdWishlist] = useState(wishlist);
    const isLengthZeroOfReadlist = readlist.length === 0;
    const isLengthZeroOfWishlist = wishlist.length === 0;

    

    useEffect(()=>{
            if(sortType == 'rating'){
                const sortedRatingRead = [...readlist].sort((a, b)=> a.rating - b.rating);
                const sortedRaingWishlist = [...wishlist].sort((a, b)=> a.rating - b.rating);
                setFilterdReadlist(sortedRatingRead);
                setFilterdWishlist(sortedRaingWishlist);
                // console.log(sortedRatingRead);
            }else if(sortType == 'pages'){
                const sortedPagesRead = [...readlist].sort((a, b)=> a.totalPages - b.totalPages);
                const sortedPagesWishlist = [...wishlist].sort((a, b)=> a.totalPages - b.totalPages);
                console.log(sortedPagesWishlist);
                setFilterdWishlist(sortedPagesWishlist);
                setFilterdReadlist(sortedPagesRead);
            }else{
                setFilterdReadlist(readlist);
                setFilterdWishlist(wishlist);
            }
    }, [sortType, readlist])

    // useEffect(() => {
    //     if (sortType) {
    //         if (sortType == "rating") {
    //             const ratingReadList = [...readlist].sort((a, b) => {
    //                 return a.rating - b.rating
    //             });
    //             setFilterdReadlist(ratingReadList);
    //             console.log(filterdReadlist);
    //         } else if (sortType == 'pages') {
    //             const pagesReadList = [...readlist].sort((a, b) => {
    //                 return a.totalPages - b.totalPages
    //             });
    //             setFilterdReadlist(pagesReadList);
    //         }
    //     }
    // }, [sortType, readlist]);

    // useEffect(() => {
    //     if (sortType) {
    //         if (sortType == "rating") {
    //             const ratingWishList = [...wishlist].sort((a, b) => {
    //                 return a.rating - b.rating;
    //             });
    //             setFilterdWishlist(ratingWishList);

    //         } else if (sortType == 'pages') {
    //             const pagesWishList = [...wishlist].sort((a, b) => {
    //                 return a.totalPages - b.totalPages
    //             });
    //             setFilterdWishlist(pagesWishList);
    //         }
    //     }
    // }, [sortType, wishlist])

    const handleToggle = (tab)=>{
        console.log(tab);
        setCurrentTab(tab);
        // console.log(currentTab);
    }

    return (
        <div className='w-11/12 mx-auto py-15'>

            <div className="flex justify-center py-4">
                <div className="dropdown  dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortType("rating")}><a>Rating</a></li>
                        <li onClick={() => setSortType("pages")}><a>Pages</a></li>
                    </ul>
                </div>
            </div>


            <Tabs className=''>
                <TabList >
                    <Tab onClick={()=> handleToggle('readlist')}>Read Books</Tab>
                    <Tab onClick={()=> handleToggle("wishlist")}>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className=' mt-10 space-y-4'>
                        {
                            isLengthZeroOfReadlist && <EmptyMsgForListedBooks></EmptyMsgForListedBooks>
                        }
                        {
                            filterdReadlist.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className=' mt-10 space-y-4'>
                        {
                            isLengthZeroOfWishlist && <EmptyMsgForListedBooks></EmptyMsgForListedBooks>
                        }
                        {
                            filterdWishlist.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BooksPage;