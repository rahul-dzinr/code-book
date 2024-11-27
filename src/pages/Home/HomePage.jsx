import { useState, useEffect } from 'react';
import { ProductCard } from "../../components";
import ProductsList from "../Products/ProductsList";

const HomePage = () => {
  const [images, setImages] = useState({
    mainBook1: '',
    mainBook2: '',
    mainBook3: '',
    collection: '',
    featured: '',
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const mainBook1 = `https://picsum.photos/320/480?random=${Math.random()}`;
        const mainBook2 = `https://picsum.photos/320/480?random=${Math.random()}`;
        const mainBook3 = `https://picsum.photos/320/480?random=${Math.random()}`;
        const collection = `https://picsum.photos/400/200?random=${Math.random()}`;
        const featured = `https://picsum.photos/96/96?random=${Math.random()}`;

        setImages({
          mainBook1,
          mainBook2,
          mainBook3,
          collection,
          featured
        });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-shadow">New & Trending</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Explore new worlds from authors</p>
          
          <div className="relative mb-8 max-w-xl">
            <input 
              type="text"
              placeholder="Titles, author, or topics"
              className="input w-full pl-10"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {['mainBook1', 'mainBook2', 'mainBook3'].map((book, index) => (
              <div key={index} className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={images[book]}
                  alt={`Featured Book ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-72 space-y-6 mt-8 lg:mt-0">
          <div className="bg-primary p-6 rounded-xl text-white">
            <h3 className="font-bold text-xl mb-2">Stephen King Collection</h3>
            <p className="text-sm opacity-80">78 books</p>
            <img 
              src={images.collection}
              alt="Stephen King" 
              className="w-full aspect-video object-cover mt-4 rounded-lg"
            />
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl mb-2">False Witness: A Novel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Karin Slaughter</p>
            <img 
              src={images.featured} 
              alt="Book cover" 
              className="w-24 h-24 mx-auto rounded-full mb-6"
            />
            <div className="flex justify-center gap-6 items-center">
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7"/>
                </svg>
              </button>
              <button className="p-3 rounded-full bg-black text-white hover:bg-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </button>
              <button className="p-2 -gray-200 dark:hover:bg-gray-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 19 7-7-7-7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductsList />
    </div>
  );
};

export default HomePage;

