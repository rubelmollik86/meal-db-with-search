import React, { useEffect, useState } from 'react';

const Restaurant = () => {
    const [searchText, setSearchText] = useState(''); 

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    const searchFood = e => {
       setSearchText(e.target.value);
    }
    return (
        <div>
            <h1 style={{ color: 'red', fontSize: '50px' }}>Find the food you want</h1>
            <input onChange={searchFood} type='text' name='' id='' placeholder='search'></input>
            <br />
            
            <h3>Result found: { meals.length}</h3>
        </div>
    );
};

export default Restaurant;