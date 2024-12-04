import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Rating } from '../components';
import { fetchProductById } from '../services/productService';
import useTitle from '../hooks/useTitle';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // State to hold the product data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  useTitle(product.name)

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await fetchProductById(id); // Fetch the product by ID
        setProduct(fetchedProduct); // Set the product state
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="h-full aspect-auto rounded-lg overflow-hidden shadow-xl">
            <img
              src={product.poster}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 italic">{product.overview}</p>
          <p className="text-lg">{product.long_description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            {product.best_seller && (
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-primary text-white">
                Best Seller
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button className="btn btn-primary">Add to Cart</button>
            {product.in_stock ? (
              <span className="text-sm text-green-600 dark:text-green-400">In Stock</span>
            ) : (
              <span className="text-sm text-red-600 dark:text-red-400">Out of Stock</span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Rating:</p>
            <Rating rating={product.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
