import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ProductCard } from "../../components";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../../services/productService";
import { useFilter } from "../../contexts/FilterContext";

const ProductsList = () => {
  const {products, initialProductList }= useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(16);
  const [filterOpen, setFilterOpen] = useState(false);

  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try{
        const data = await fetchProducts(searchTerm);
        initialProductList(data)
        setLoading(false);
        console.log(data);
      }catch (err){
        setError(err.message);
        setLoading(false);
      }
     
      
    };

    getProducts();
  }, [searchTerm]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = products.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    gsap.from(".book-grid", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  };

  if(loading) return <div>Loading...</div>
  if(error) return <div>{error}</div>

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
            image={book.poster || book.image_local || ""} // Use the poster field from your data
            price={book.price}
            isBestseller={book.isBestseller}
            id={book.id} // Add this line to pass the id
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / booksPerPage)}
        onPageChange={handlePageChange}
      />

      {filterOpen && <FilterBar onClose={() => setFilterOpen(false)} />}
    </div>
  );
};
export default ProductsList;

