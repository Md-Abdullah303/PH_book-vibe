import { useLoaderData, useParams } from "react-router";

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


const BooksDetails = () => {
    const { id } = useParams()
    console.log("param", id);

    const allBooksData = useLoaderData();
    // console.log(allBooksData);

    const expectedBook = allBooksData.find(book => book.bookId == id);
    // console.log(expectedBook);

    return (
        <div className="grid grid-cols-2 gap-15  w-10/12 mx-auto rounded-xl p-10 m-20 ">
            <div className="bg-base-300 py-10 flex  items-center  justify-center rounded-xl">
                <img className=" rounded-xl w-75" src={expectedBook.image} alt={expectedBook.bookName} />
            </div>
            {/* card info */}
            <div className="flex flex-col gap-5">
                <div className="">
                    <h1 className="text-3xl font-bold">{expectedBook.bookName}</h1>
                    <p className="text-lg text-gray-600 font-semibold">By : {expectedBook.author}</p>
                </div>
                <div className="py-3  border-y border-gray-400">
                    <h2 className="text-lg ">Fiction</h2>
                </div>
                <div className="">
                    <p className="text-gray-600 "><span className=" font-bold text-black">review : </span>{expectedBook.review}</p>
                </div>
                <div className="flex  items-center gap-4">
                    <h1 className=" font-bold">Tag :</h1>
                    <div className=" space-x-3">
                        {
                            expectedBook.tags.map(tag => <div className="badge badge-soft badge-success">{tag}</div>)
                        }
                    </div>
                </div>
                <hr />
                <div className="">
                    <div className="flex items-center gap-5 justify-between w-90">
                        <span>Number of Pages: </span>
                        <span>{expectedBook.totalPages}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-between w-90">
                        <span>Publisher: </span>
                        <span>{expectedBook.author}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-between w-90">
                        <span>Year of Publishing: </span>
                        <span>{expectedBook.yearOfPublishing}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-between w-90">
                        <span>Rating: </span>
                        <span>{expectedBook.rating}</span>
                    </div>
                </div>
                <div className=" flex  items-center gap-4">
                    <button className="btn">Read</button>
                    <button className="btn btn-info text-white border-none">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;