import React, { useState } from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import productList from './components/data'
import Search from './components/Search'
const App = () => {
  const[data,setData]=useState([...productList])
  const [cart,setCart]=useState([])
  return (
    <div>
      <BrowserRouter>
      <Navbar setData={setData} /> <br /><br /><br />
      
        <Routes>
          <Route path='/' element={<Product productList={data} cart={cart} setCart={setCart} />} />
          <Route path='/product/:id' element={<ProductDetail/>}  cart={cart} setCart={setCart} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/search/:term' element={<Search  />} cart={cart} setCart={setCart} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
