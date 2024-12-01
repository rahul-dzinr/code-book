import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ProductDetail from "../pages/ProductDetail"
import ProductsList from "../pages/Products/ProductsList"

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsList />} />
    <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
  )
}

export default AllRoutes