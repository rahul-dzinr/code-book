import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const paginationRef = useRef(null);

  useEffect(() => {
    gsap.from(paginationRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out"
    });
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(renderPageButton(i));
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(renderPageButton(i));
        }
        pageNumbers.push(<span key="ellipsis1">...</span>);
        pageNumbers.push(renderPageButton(totalPages));
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(renderPageButton(1));
        pageNumbers.push(<span key="ellipsis2">...</span>);
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(renderPageButton(i));
        }
      } else {
        pageNumbers.push(renderPageButton(1));
        pageNumbers.push(<span key="ellipsis3">...</span>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(renderPageButton(i));
        }
        pageNumbers.push(<span key="ellipsis4">...</span>);
        pageNumbers.push(renderPageButton(totalPages));
      }
    }

    return pageNumbers;
  };

  const renderPageButton = (pageNumber) => (
    <button
      key={pageNumber}
      onClick={() => handlePageChange(pageNumber)}
      className={`px-4 py-2 rounded-lg ${
        currentPage === pageNumber
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
    >
      {pageNumber}
    </button>
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) {
      gsap.to(paginationRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          onPageChange(pageNumber);
          gsap.to(paginationRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.3
          });
        }
      });
    }
  };

  return (
    <div ref={paginationRef} className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

