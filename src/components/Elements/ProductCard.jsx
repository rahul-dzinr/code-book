import { Link } from "react-router-dom";

const ProductCard = ({ title, author, rating, image, price }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg transition-all hover:shadow-xl">
      <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="px-2">
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-1">{author}</p>
        
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold text-black">${price.toFixed(2)}</p>
          
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "#E5B06E" : "none"}
                stroke="#E5B06E"
                strokeWidth="2"
                className="flex-shrink-0"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
        {/* `/product/${title.toLowerCase().replace(/\s+/g, '-')}`} */}
        <Link 
          to={"/products"}
          className="block w-full text-center px-6 py-2 border border-black text-black rounded-lg text-sm 
                     hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;