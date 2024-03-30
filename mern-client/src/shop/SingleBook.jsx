import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <div className="relative overflow-hidden group">
                        <img src={imageURL} alt={bookTitle}/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold"></p>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <h2 className="text-3xl font-semibold mb-2">{bookTitle}</h2>
                    <p className="text-lg font-medium mb-2">Author: {authorName}</p>
                    <p className="text-lg font-medium mb-2">Category: {category}</p>
                    <p className="text-lg mb-4">{bookDescription}</p>
                    <a href={bookPDFURL} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-sky-700 text-black hover:bg-sky-800 hover:text-white rounded-lg transition duration-300">Download Book</a>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
