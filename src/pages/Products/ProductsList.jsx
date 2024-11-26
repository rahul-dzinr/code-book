import { ProductCard } from '../../components';
import { useState, useEffect } from 'react';
import FilterBar from './FilterBar';

const ProductsList = () => {
  const [images, setImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(16); // Display 16 books per page
  const [filterOpen, setFilterOpen] = useState(false);

  const books = [
    { title: "Left to Fear", author: "Blake Pierce", rating: 3, price: 12.99 },
    { title: "Malibu Rising", author: "Taylor Jenkins Reid", rating: 4, price: 16.99 },
    { title: "Black Ice", author: "Brad Thor", rating: 3, price: 14.49 },
    { title: "The Silent Patient", author: "Alex Michaelides", rating: 5, price: 18.99 },
    { title: "The Midnight Library", author: "Matt Haig", rating: 4, price: 13.49 },
    { title: "The Four Winds", author: "Kristin Hannah", rating: 4, price: 19.99 },
    // Add more books as needed...
  ];

  useEffect(() => {
    // Generate random images for each book
    const fetchImages = async () => {
      const generatedImages = books.map(() => ({
        image: `https://picsum.photos/320/480?random=${Math.random()}`
      }));
      setImages(generatedImages);
    };

    fetchImages();
  }, [books]);

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="p-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">All Books</h1>
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="text-xl px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          •••
        </button>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentBooks.map((book, index) => (
          <ProductCard
            key={index}
            title={book.title}
            author={book.author}
            rating={book.rating}
            image={images[index]?.image || ""}
            price={book.price}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }).map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Filter Sidebar */}
      {filterOpen && <FilterBar onClose={() => setFilterOpen(false)} />}
    </div>
  );
};

export default ProductsList;
