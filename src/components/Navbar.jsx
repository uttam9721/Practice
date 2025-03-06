import React, { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import productList from "./data";
const Navbar = ({setData}) => {
  
  const navigate =useNavigate();
  const [search,setSearch]=useState("")
  const location=useLocation();
  
    const filterByType =(type)=>{
      if(type==='All'){
        setData(productList)
      }else{
        const ele =  productList.filter((cat)=>cat.type===type);
        // console.log(ele)
        setData(ele)
      }
    }

    // Search
    const handleSubmit=(e)=>{
      e.preventDefault();
      navigate(`/search/${search}`)
      setSearch("");

    }
   
  
  return (
    <nav className="navbar">
      <Link to={'/'} className="nav-logo">MyShop</Link>
      <div className="nav-links">
        {/* <div>Home</div> */}
        <div>About</div>
      </div>
    {
      location.pathname=='/' && (
        <div className="nav-category">
        <select onClick={(e)=>filterByType (e.target.value)}>
          <option value="All">All</option>
          <option value="Shoes">Shoes</option>
          <option value="Mobile">Mobiles</option>
          <option value="Laptop">Laptop</option>
          <option value="bluetooth , airdopes">bluetooth , airdopes</option>
          <option value="Jeans">Jeans</option>
          <option value="Tshirts">Tshirts</option>
          <option value="Watch">Watch</option>
          <option value="Hoody">Hoody</option>
        </select>
      </div>
      )
    }
      <div className="nav-search">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search here..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />
        </form>
      </div>
      <Link to={'/cart'} className="nav-cart">🛒</Link>
    </nav>
  );
};

export default Navbar;
