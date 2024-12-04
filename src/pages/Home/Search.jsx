import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate(`/products?q=${searchRef.current.value}`); // Navigate with query
  };

  return (
    <>
      <div className="relative mb-8 max-w-xl">
        <form onSubmit={handleSearch}> {/* Attach onSubmit here */}
          <input
            ref={searchRef}
            type="text"
            placeholder="Titles, author, or topics"
            className="input w-full pl-10"
          />
          <button type="submit" className="hidden" aria-hidden="true"></button> {/* Optional hidden submit button */}
        </form>
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
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </>
  );
};

export default Search;
