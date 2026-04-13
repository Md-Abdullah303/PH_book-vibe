import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";




const BooksDetails = () => {
    const { id } = useParams();
    // console.log("param", id);

    const allBooksData = useLoaderData();
    // console.log(allBooksData);

    const expectedBook = allBooksData.find(book => book.bookId == id);
    const { 
        author, 
        bookName, 
        category, 
        image, 
        publisher, 
        rating, 
        review, 
        tags, 
        totalPages, 
        yearOfPublishing 
    } = expectedBook;

    const {handleAddToRead, handleAddToWishlist, currentTab, setCurrentTab} = useContext(BookContext);
    // console.log(bookContext);



    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15  sm:w-10/12 w-[98%] mx-auto rounded-xl p-5 sm:p-10 m-20 ">
            <div className="bg-base-300 py-10 flex  items-center  justify-center rounded-xl">
                <img className=" rounded-xl w-[70%] sm:w-40 lg:w-75" src={image} alt={bookName} />
            </div>
            {/* card info */}
            <div className="flex flex-col gap-5">
                <div className="">
                    <h1 className="text-3xl font-bold">{bookName}</h1>
                    <p className="text-lg text-gray-600 font-semibold">By : {author}</p>
                </div>
                <div className="py-3  border-y border-gray-400">
                    <h2 className="text-lg ">{category}</h2>
                </div>
                <div className="">
                    <p className="text-gray-600 "><span className=" font-bold text-black">review : </span>{review}</p>
                </div>
                <div className="flex  items-center gap-4">
                    <h1 className=" font-bold">Tag :</h1>
                    <div className=" space-x-3">
                        {
                           tags.map((tag, ind) => <div 
                           key={ind}
                           className="badge badge-soft badge-success">{tag}</div>)
                        }
                    </div>
                </div>
                <hr />
                <div className="font-medium text-lg space-y-2">
                    <div className="flex items-center gap-5 justify-between md:w-90">
                        <span>Number of Pages: </span>
                        <span>{totalPages}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-between md:w-90">
                        <span>Publisher: </span>
                        <span>{publisher}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-between md:w-90">
                        <span>Year of Publishing: </span>
                        <span>{yearOfPublishing}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-between md:w-90">
                        <span>Category: </span>
                        <span>{category}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-between md:w-90">
                        <span>Rating: </span>
                        <span>{rating}</span>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row md:items-center gap-4">
                    <button onClick={()=> handleAddToRead(expectedBook)} className="btn">Add to Read</button>
                    <button onClick={()=> handleAddToWishlist(expectedBook)} className="btn btn-info text-white border-none">Mark to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;