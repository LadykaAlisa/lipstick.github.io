import React, {useState, useEffect} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Modal from '../Modal/Modal'
import axios from 'axios';

const Main = (props) => {
    const {onClick} = props;
    const [items, setItems] = useState([]);
    const [favourites, setFavourites] = useState(false);
    const [modal, setModal] = useState(false);
    const [addToCart, setAddToCart] = useState(false);
    const {name, price, pathToPic, article, color, closeButton, addToCartButton, star} = props;


    const funAddToCart = (event) => {
        putToStorage('AllCartProducts');
        let newArr = JSON.parse(localStorage.getItem('AllCartProducts')).filter((item => item));
        localStorage.setItem('AllCartProducts', JSON.stringify(newArr));
        setAddToCart(true);
        setModal(true);
    }
    const closeModalWindow = (event) => {
        setAddToCart(false);
        setModal(false);
    }
    const putToStorage = (folder) => {
        let favouritesProducts = JSON.parse(localStorage.getItem(folder));
        if (favouritesProducts == null) favouritesProducts = [];
        favouritesProducts.push(props);
        let ProductsAddCart = Array.from(new Set(favouritesProducts.map(JSON.stringify))).map(JSON.parse);
        localStorage.setItem(folder, JSON.stringify(ProductsAddCart));
    }

   const addToFavourite = (event) => {
        if (event.target.classList.contains('product-card__button')) {
            onClick(event);
            putToStorage('FavouritesProducts');
        } else {
            localStorage.setItem(`Favourites Product ${article}`, JSON.stringify(props))
            setFavourites(true);
        }
    }

    const removeToFavourite = () => {
        localStorage.removeItem(`Favourites Product ${article}`)
        setFavourites(false);
    }
    
     useEffect (() => {
         axios("./product.json")
             .then (resp => {
                 setItems(resp.data);
       })
    })

     
    const productItem = items.map((item, index) =>
        <ProductCard
            name={item.name}
            price={item.price}
            pathToPic={item.pathToPic}
            article={item.article}
            color={item.color}
            addToCartButton={true} onClick={funAddToCart}
            star={true} 
            key={index}>
        </ProductCard>)
    
        return (
            <div className="container">
                <div className="product-card__block">
             {productItem}
                    {modal && <Modal onClick={(event) => closeModalWindow(event)}
                                     header='Товар добавлен в корзину' text='Можете продолжить покупки'
                                     actions={<>
                                         <button className={'modal__window-btn'} onClick={(event) => closeModalWindow(event)}>Продолжить покупки</button>
                                     </>} closeButton={true}></Modal>}
                </div>
            </div>
        );
    }


export default Main;