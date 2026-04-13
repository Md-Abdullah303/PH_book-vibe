
const allReadListToLocalDB = ()=>{
    const allReadListBooks = localStorage.getItem("readList");
    
    if(allReadListBooks) return JSON.parse(allReadListBooks);

    return [];
}

const addReadListToLocalDB = (book)=>{
    const allReadBook = allReadListToLocalDB();
    const allReadyExist = allReadBook.find(bk=> bk.bookId === book.bookId);
    if(!allReadyExist){
        allReadBook.push(book);
        localStorage.setItem("readList", JSON.stringify(allReadBook));
    }

}

export {addReadListToLocalDB, allReadListToLocalDB};