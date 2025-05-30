// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data);
    // console.log(Data);
    console.log(singleBook);

    const { image, bookName, publisher, rating, tags, yearOfPublishing} = singleBook;
    return (
        <div className="card border-2 shadow-lg">
            <div>
            <figure className="p-4 bg-gray-200 w-2/3 mx-auto mt-4 rounded-xl">
                <img className="h-[166px]"
                src= {image}
                alt= "Book Image" />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-10">
                    {
                    tags.map(tag => <button>{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{publisher}</div>
                <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                </div>
            </div>
            </div>  
        </div>
    );
};

export default Book;