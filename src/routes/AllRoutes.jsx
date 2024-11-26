import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ProductDetail from "../pages/ProductDetail"
import ProductsList from "../pages/Products/ProductsList"
const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product" element={<ProductsList />}  />
            <Route path="/products" element={<ProductDetail />} />
        </Routes>
    </Router>
  )
}

export default AllRoutes