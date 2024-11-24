
const ProductCard = ({ title, author, rating, image }) => {
  return (
    <div className="flex-shrink-0 w-[280px]">
    <img 
      src={image} 
      alt={title} 
      className="w-[180px] h-[270px] object-cover rounded-xl shadow-lg mb-4" 
    />
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill={i < rating ? "#E5B06E" : "none"}
          stroke="#E5B06E"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
    <h3 className="font-serif text-lg mb-1">{title}</h3>
    <p className="text-gray-500 text-sm mb-3">{author}</p>
    <button className="px-6 py-2 border border-[#E5B06E] text-[#E5B06E] rounded-full text-sm hover:bg-[#E5B06E] hover:text-white transition-colors">
      Buy Now
    </button>
  </div>
  )
}

export default ProductCard