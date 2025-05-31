import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
// import Book from '../../components/Book/Book';
import { getStoreBook } from '../../utilities/localStorage'; // Adjust the path as needed

const ReadList = () => {
    const data = useLoaderData();
    console.log(data);

    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedBookData = getStoreBook();
        // console.log(storedBookData);
        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        // console.log(convertedStoredBook);
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        // console.log(myReadList);
        setReadList(myReadList);
    }, [data]);
    return (
        <div>
            <Tabs>
            <TabList>
            <Tab>Read Book List</Tab>
            <Tab>Wishlist</Tab>
            </TabList>

            <TabPanel>
            <h2>Book I read {readList.length}</h2>
            {/* {
                // readList.map(book => <Book key={book.bookId} singleBook={book}>{}</Book>)
            } */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                readList.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                }
            </div>
            </TabPanel>
            <TabPanel>
            <h2>My Wishlist</h2>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default ReadList;
