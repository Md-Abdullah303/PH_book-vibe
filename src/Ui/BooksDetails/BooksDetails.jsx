import { useLoaderData, useParams } from "react-router";




const BooksDetails = () => {
    const {id} = useParams()
    console.log("param", id);

    const allBooksData = useLoaderData();
    // console.log(allBooksData);

    const expectedBook = allBooksData.find(book=> book.bookId == id);
    console.log(expectedBook);

    return (
        <div>
            <h1>booksDetails</h1>
        </div>
    );
};

export default BooksDetails;