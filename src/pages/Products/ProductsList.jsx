import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ProductCard } from "../../components";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

const ProductsList = () => {
  const [images, setImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(16);
  const [filterOpen, setFilterOpen] = useState(false);

  const books = [
    { title: "Left to Fear", author: "Blake Pierce", rating: 3, price: 12.99, isBestseller: false },
    { title: "Malibu Rising", author: "Taylor Jenkins Reid", rating: 4, price: 16.99, isBestseller: true },
    { title: "Black Ice", author: "Brad Thor", rating: 3, price: 14.49, isBestseller: false },
    { title: "The Silent Patient", author: "Alex Michaelides", rating: 5, price: 18.99, isBestseller: true },
    { title: "The Midnight Library", author: "Matt Haig", rating: 4, price: 13.49, isBestseller: false },
    { title: "The Four Winds", author: "Kristin Hannah", rating: 4, price: 19.99, isBestseller: true },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      const generatedImages = books.map(() => ({
        image: `https://picsum.photos/320/480?random=${Math.random()}`
      }));
      setImages(generatedImages);
    };

    fetchImages();
  }, [books]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    gsap.from(".book-grid", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">All Books</h2>
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="text-xl px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          •••
        </button>
      </div>

      <div className="book-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentBooks.map((book, index) => (
          <ProductCard
            key={index}
            title={book.title}
            author={book.author}
            rating={book.rating}
            image={images[index]?.image || ""}
            price={book.price}
            isBestseller={book.isBestseller}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(books.length / booksPerPage)}
        onPageChange={handlePageChange}
      />

      {filterOpen && <FilterBar onClose={() => setFilterOpen(false)} />}
    </div>
  );
};

export default ProductsList;

