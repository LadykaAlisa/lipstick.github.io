import React, {useState, useEffect} from 'react';
import FavouritesItem from "../../components/FavouritesItem/FavouritesItem";
import "../Favourites/Favourites.scss";

const Favourites = () => {

        let productsArr = JSON.parse(localStorage.getItem('Favourites')).map((item, index) =>
            <FavouritesItem
                name={item.name}
                price={item.price}
                pathToPic={item.pathToPic}
                article={item.article}
                color={item.color}
                key={index}
            />)

        return (
            productsArr[0] == null || undefined
                ?   <div className="container"><h2>В избранное ничего не добавлено</h2></div> 
                : <div className="container">
                     <div className="product-card__block">
                    {productsArr}
                </div>
                </div>  
        )
    }



export default Favourites;