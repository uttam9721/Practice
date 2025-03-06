import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productList from './data'
import Product from './Product'
const ProductDetail = () => {
    const [product,setProduct]=useState({})
    const [related,setRelated]=useState([])
    const { id } = useParams()
    // console.log(id)
   useEffect(()=>{
    const filterProduct =productList.filter((e)=>e.id==id)
    setProduct(filterProduct[0])

    const filterRelated= productList.filter((p)=>p.type==product.type)
    // console.log(filterRelated);
    setRelated(filterRelated)
   },[id,product.type])
  return (
   <div>
     <div className="product-detail-container">
      <div className="product-detail-card">
        <img src={product.img} alt={product.model} className="product-detail-image" />
        <div className="product-detail-info">
          <h1>{product.brand} - {product.model}</h1>
          <p className="product-detail-price">Price: ₹{product.price}</p>
          <p className="product-detail-type">Category: {product.type}</p>
          <p className="product-detail-space">Storage: {product.space}</p>
          <p className="product-detail-camera">Camera: {product.camera}</p>
          <p className="product-detail-battery">Battery: {product.battery}</p>
          <p className="product-detail-description">Description:{product.description}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
    <div>
      <h1 style={{textAlign: 'center'}}>Related Product</h1>
      <Product productList={related} />
    </div>
    </div>
  )
}

export default ProductDetail
