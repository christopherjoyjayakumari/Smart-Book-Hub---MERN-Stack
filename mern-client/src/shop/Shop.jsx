import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Card } from "flowbite-react";

const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Engineering",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibilography",
    "AutoBiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
];

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const openImageModal = (imageURL) => {
        setSelectedImage(imageURL);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const handleDownloadClick = (pdfURL) => {
        window.open(pdfURL, '_blank');
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredBooks = selectedCategory === 'All' ? books : books.filter(book => book.category === selectedCategory);

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
            <div className="flex justify-between items-center mb-4">
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="p-2 border border-gray-300 rounded-md"
                >
                    <option value="All">All Categories</option>
                    {bookCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                {selectedCategory !== 'All' && (
                    <p><strong>{filteredBooks.length}</strong> books found in <strong>{selectedCategory}</strong></p>
                )}
            </div>

            {filteredBooks.length === 0 && (
                <h3 className="text-3xl font-bold text-center mb-4">Books not found</h3>
            )}

            <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {filteredBooks.map(book => (
                    <Card key={book._id}>
                        <img
                            src={book.imageURL}
                            alt={book.bookTitle}
                            className='h-96 cursor-pointer'
                            onClick={() => openImageModal(book.imageURL)}
                        />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {book.bookTitle}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Category: {book.category}
                        </p>
                        <button className='bg-blue-700 font-semibold text-white py-2 rounded' onClick={() => handleDownloadClick(book.bookPDFURL)}>Download Now</button>
                    </Card>
                ))}
            </div>

            <Modal
                isOpen={selectedImage !== null}
                onRequestClose={closeImageModal}
                contentLabel="Book Image"
                ariaHideApp={false}
                className="modal"
                overlayClassName="overlay"
            >
                <img src={selectedImage} alt="Selected Book" className="max-w-full max-h-full" />
                <button onClick={closeImageModal} className="absolute top-0 right-0 m-4 p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200 focus:outline-none">&#x2715;</button>
            </Modal>
        </div>
    );
};

export default Shop;
