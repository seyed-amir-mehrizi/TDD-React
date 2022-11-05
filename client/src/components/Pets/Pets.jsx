import React, { useState } from 'react'
import './Pets.css'
import Filter from '../Filter/Filter';
import Cards from '../Cards/Cards'
import axios from 'axios';
import { useEffect } from 'react';


function Pets() {
  const [cats, setCats] = useState();

  const fetchCats = async () => {
    const data = await (await axios.get('http://localhost:4000/cats')).data;
    setCats(data);
  }

  useEffect(() => {
    fetchCats();
  }, []);
  return (
    <div className='container'>
      <div className='app-container'>
        <Filter />
        <Cards cats={cats} />
      </div>
    </div>
  )
}

export default Pets