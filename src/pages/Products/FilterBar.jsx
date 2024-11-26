
const FilterBar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-80 h-full p-6 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-lg mb-4 px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Close
        </button>

        {/* Filters */}
        <h2 className="text-xl font-bold mb-4">Filter Options</h2>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Price Range</label>
          <input type="range" min="0" max="50" className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Author</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Search by author"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Rating</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
            <option value="">Select Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterBar