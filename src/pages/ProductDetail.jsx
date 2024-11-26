import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams(); // Assuming you're using React Router for dynamic routing

    // Example data for now
    const book = {
      id: 10001,
      name: "Basics To Advanced In React",
      overview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      long_description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
      price: 29,
      poster:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      rating: 5,
      in_stock: true,
      best_seller: true,
    };
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Book Image */}
        <div className="flex-1">
  <div className="h-full aspect-auto rounded-lg overflow-hidden shadow-xl">
    <img
      src={book.poster}
      alt={book.name}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>


        {/* Right Section: Book Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">
            {book.name}
          </h1>
          <p className="text-gray-600 italic">{book.overview}</p>
          <p className="text-lg">{book.long_description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-[#E5B06E]">
              ${book.price}
            </span>
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded ${
                book.best_seller ? "bg-[#E5B06E] text-white" : "bg-gray-100"
              }`}
            >
              {book.best_seller ? "Best Seller" : "Regular"}
            </span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors">
              Add to Cart
            </button>
            {book.in_stock ? (
              <span className="text-sm text-green-600">In Stock</span>
            ) : (
              <span className="text-sm text-red-600">Out of Stock</span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-6">
            <p className="text-sm text-gray-600">Rating:</p>
            <div className="flex">
              {[...Array(book.rating)].map((_, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#E5B06E]"
                >
                  <path d="M12 .587l3.668 7.451L24 9.173l-6 5.834 1.419 8.277L12 18.896l-7.419 3.888L6 15.007 0 9.173l8.332-1.135L12 .587z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail