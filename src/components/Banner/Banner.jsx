import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='my-[4rem]'>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img 
                src={bookimage}
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                <h1 className="py-6 text-6xl font-bold mr-12">
                    Books to freshen up <br></br> your bookshelf
                </h1>
                <button className="btn btn-accent p-4">View The List</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;