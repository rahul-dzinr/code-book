import { ProductCard } from "../../components"

const HomePage = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-8 pt-8">
    <div className="flex justify-between gap-12 mb-20">
      <div className="flex-1">
        <h1 className="font-serif text-6xl font-light mb-4">New & Trending</h1>
        <p className="text-gray-500 mb-8">Explorer new worlds from authors</p>
        
        <div className="relative mb-12 max-w-md">
          <input 
            type="text"
            placeholder="Titles, author, or topics"
            className="w-full p-4 pl-12 rounded-xl bg-white shadow-sm placeholder-gray-400 text-sm"
          />
          <svg 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
        </div>

        <div className="relative">
          <img 
            src="/placeholder.svg?height=600&width=400" 
            alt="The Last Thing He Told Me" 
            className="w-[400px] rounded-2xl shadow-2xl transform rotate-[-4deg]"
          />
          <div className="absolute top-0 left-0 bg-black text-white text-xs px-3 py-1 rounded-full m-4">
            #1 NEW YORK TIMES BESTSELLER
          </div>
        </div>
      </div>

      <div className="w-[300px] space-y-6">
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Author of the Week</div>
        <div className="bg-gradient-to-br from-[#E5B06E] to-[#D4A05B] p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-1">Stephen King Collection</h3>
          <p className="text-sm opacity-80">78 books</p>
          <img 
            src="/placeholder.svg?height=200&width=200" 
            alt="Stephen King" 
            className="w-full h-48 object-cover mt-4 rounded-xl"
          />
        </div>

        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-8">Last listened</div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg mb-1">False Witness: A Novel</h3>
          <p className="text-sm text-gray-500 mb-6">Karin Slaughter</p>
          <img 
            src="/placeholder.svg?height=120&width=120" 
            alt="Book cover" 
            className="w-24 h-24 mx-auto rounded-full mb-6"
          />
          <div className="flex justify-center gap-6 items-center">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 19-7-7 7-7"/>
              </svg>
            </button>
            <button className="p-3 rounded-full bg-black text-white hover:bg-gray-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 19 7-7-7-7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-medium">Recent Bestsellers</h2>
        <div className="h-[1px] flex-1 bg-gray-200 mx-8"></div>
      </div>
      <div className="flex gap-8 overflow-x-auto pb-8 -mx-8 px-8">
        <ProductCard 
          title="Left to Fear"
          author="Blake Pierce"
          rating={3}
          image="/placeholder.svg?height=270&width=180"
        />
        <ProductCard 
          title="Malibu Rising"
          author="Taylor Jenkins Reid"
          rating={4}
          image="/placeholder.svg?height=270&width=180"
        />
        <ProductCard 
          title="Black Ice"
          author="Brad Thor"
          rating={3}
          image="/placeholder.svg?height=270&width=180"
        />
        <ProductCard 
          title="Blind Tiger"
          author="Sandra Brown"
          rating={4}
          image="/placeholder.svg?height=270&width=180"
        />
      </div>
    </div>
  </div>
  )
}

export default HomePage