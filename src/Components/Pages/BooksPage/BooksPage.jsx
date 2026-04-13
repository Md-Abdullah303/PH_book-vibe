import React, { useContext } from 'react';
import { BookContext } from '../../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooksCard from '../../../Ui/ListedBooksCard/ListedBooksCard';

const BooksPage = () => {
    const { wishlist, readlist } = useContext(BookContext);
    // console.log(test);
    return (
        <div className='w-11/12 mx-auto py-15'>
            <Tabs className=''>
                <TabList >
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div  className=' mt-10 space-y-4'>
                        {
                            readlist.map(book=> <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Wish list: {wishlist.length}</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BooksPage;