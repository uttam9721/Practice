import React, { useState, useEffect } from 'react';
import productList from './data';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState([]);
    const { term } = useParams();

  useEffect(()=>{
    const data=()=>{
        const filterData=productList.filter((s)=>s.brand.toLowerCase().includes(term.toLowerCase())||s.type.toLowerCase().includes(term.toLowerCase()));
        setSearchTerm(filterData);
    }
    data();
  },[term])
    return (
        <div>
            <Product productList={searchTerm} />
        </div>
    );
};

export default Search;
