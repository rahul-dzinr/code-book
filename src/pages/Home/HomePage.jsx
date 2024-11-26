import { ProductCard } from "../../components"
import { useState, useEffect } from 'react'
import ProductsList from "../Products/ProductsList";

const HomePage = () => {
  const [images, setImages] = useState({
    mainBook1: '',
    mainBook2: '',
    mainBook3: '',
    collection: '',
    featured: '',
  })

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
        console.error("Error fetching images:", error)
      }
    }

    fetchImages()
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">New & Trending</h1>
          <p className="text-gray-600 mb-6">Explorer new worlds from authors</p>
          
          <div className="relative mb-8 max-w-xl">
            <input 
              type="text"
              placeholder="Titles, author, or topics"
              className="w-full p-3 pl-10 rounded-lg bg-white shadow-sm"
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

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.mainBook1}
                alt="Featured Book 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.mainBook2}
                alt="Featured Book 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl sm:hidden lg:block">
              <img 
                src={images.mainBook3}
                alt="Featured Book 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-72 space-y-6 mt-8 lg:mt-0">
          <div className="bg-[#E5B06E] p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Stephen King Collection</h3>
            <p className="text-sm opacity-80">78 books</p>
            <img 
              src={images.collection}
              alt="Stephen King" 
              className="w-full aspect-video object-cover mt-4 rounded-lg"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl mb-2">False Witness: A Novel</h3>
            <p className="text-sm text-gray-600 mb-6">Karin Slaughter</p>
            <img 
              src={images.featured} 
              alt="Book cover" 
              className="w-24 h-24 mx-auto rounded-full mb-6"
            />
            <div className="flex justify-center gap-6 items-center">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7"/>
                </svg>
              </button>
              <button className="p-3 rounded-full bg-black text-white hover:bg-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
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
  )
}

export default HomePage

