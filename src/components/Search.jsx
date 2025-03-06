import React, { useState, useEffect } from 'react';
import productList from './data';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState([]);
    const { term } = useParams();

    useEffect(() => {
        const filterData = () => {
          const data = productList.filter((s) => s.model.toLowerCase().includes(term.toLowerCase()))||s.brand.toLowerCase().includes(term.toLowerCase())
          setSearchTerm(data);
        }
        filterData();
    }, [term]);

    return (
        <div>
            <Product productList={searchTerm} />
        </div>
    );
};

export default Search;
