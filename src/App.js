import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.scss"
import "./App.scss"
import Home from './component/pages/Home'
import Header from "./component/Header"
import Footer from './component/Footer';
import ProductDetails from './component/pages/ProductDetails';
const App = () => {
  return (
   <>
    <div className="App">
     
        <BrowserRouter>
          <Header />
         
          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductDetails />} />
            {/* category wise product listing route */}
            <Route path = "/category/:category" element = {"<CategoryProduct />"} />
            {/* cart */}
            <Route path = "/cart" element = {"<Cart />"} />
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {"<Search />"} />
          </Routes>

          <Footer />
        </BrowserRouter>
   
    </div>
   </>
  )
}

export default App