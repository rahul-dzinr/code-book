import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = ({ title, author, rating, image, price, isBestseller }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg transition-all hover:shadow-xl">
      <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {isBestseller && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            Bestseller
          </span>
        )}
      </div>
      <div className="px-2">
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">{author}</p>

        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
          <Rating rating={rating} />
        </div>

        <Link 
          to={"/products"}
          className="block w-full text-center px-6 py-2 border border-primary text-primary rounded-lg text-sm 
                     hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

