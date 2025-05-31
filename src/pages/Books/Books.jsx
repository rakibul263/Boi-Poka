import React, { Suspense} from 'react';
import Book from '../Book/Book';

const Books = ({ Data }) => {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data));
    // },[])

    // const bookPromise = fetch("booksData.json")
    // .then(res => res.json());

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    Data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </Suspense>
        </div>
    );
};

export default Books;