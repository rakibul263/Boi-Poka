import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDb';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    // console.log(data);
    const singleData = data.find(book => book.bookId === parseInt(id));
    // console.log(singleData);
    const {bookName, image} = singleData || {};
    const handelMarkAsRead = (id) => {
        addToStoreDB(id);
        alert('Book marked as read');
    }
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <img className='w-48' src={image} alt="" />
            <h5 className='text-lg font-semibold'>{bookName}</h5>

            <button onClick={()=>handelMarkAsRead(id)} className='btn btn-accent m-3'>Read</button>
            <button className='btn btn-outline btn-info m-3'>Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;