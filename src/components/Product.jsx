import React from "react";
// import productList from "./data.js";
import { Link } from "react-router-dom";
import Crousel from './Crousel'
const Product = ({productList,cart,setCart}) => {
   const addToCart=(id,price,description,model,brand,img)=>{
      const  obj={
          id,
          price,
          description,
          model,
          brand,
          img
        };
        setCart([...cart,obj])
        // console.log(cart)
      }

  return (
    <>
    <Crousel />
    <div className="product-container">
      {productList.map((item, index) => (
        <div key={index} className="product-card">
            <Link to={`/product/${item.id}`}>
          <img src={item.img} alt="Product" className="product-image" />
            </Link>
          <div className="product-details">
            <h2>{item.brand}</h2>
            <p className="product-model">{item.model}</p>
            <p className="product-price">₹{item.price}</p>
            <p className="product-type">{item.type}</p>
            <p className="product-space">{item.space}</p>
            <button className="buy-button"
            onClick={()=>addToCart(
              item.id,
              item.price,
              item.description,
              item.model,
              item.brand,
              item.img
            )}
            >Buy Now</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Product;
