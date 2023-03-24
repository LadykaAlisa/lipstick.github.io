import React, {useState, useEffect} from 'react';
import './ProductCard.scss';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ProductCard = (props) => {

    const [modal, setModal] = useState(false);
    const [favourites, setFavourites] = useState(false);
    const [addToCart, setAddToCart] = useState(false);
   
    
    const funAddToCart = (event) => {
        putToStorage('AllCartProducts');
        let newArr = JSON.parse(localStorage.getItem('AllCartProducts')).filter((element => element));
        localStorage.setItem('AllCartProducts', JSON.stringify(newArr));
        setAddToCart(true);
        setModal(true);
    }
    const closeModalWindow = (event) => {
        setAddToCart(false);
        setModal(false);
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

   const putToStorage = (folder) => {
        let favouritesProducts = JSON.parse(localStorage.getItem(folder));
        if (favouritesProducts == null) favouritesProducts = [];
        favouritesProducts.push(props);
        let ProductsAddCart = Array.from(new Set(favouritesProducts.map(JSON.stringify))).map(JSON.parse);
        localStorage.setItem(folder, JSON.stringify(ProductsAddCart));
    }

    useEffect ((prevProps, prevState, snapshot) => {
        if (localStorage.getItem(`Favourites Product ${article}`)) {
            putToStorage('Favourites');
        }
    })
    
    
        const {onClick} = props;
        const {name, price, pathToPic, article, color, closeButton, addToCartButton, star} = props;



        return (
            <>
                <div className='product-card__container'>
                    <img className='product-card__image' src={pathToPic} alt="{lipstick}" />
                    <h1 className='product-card__title'>{name}{closeButton ? <button className={"modal__window-closeBtn" } onClick = {onClick}>X</button> :''}</h1>
                    <h2 className='product-card__price'>{price}</h2>
                    <h2 className='product-card__article'>Article:{article}</h2>
                    <h2 className='product-card__color'>{color}</h2>
                  {star ? favourites || localStorage.getItem(`Favourites Product ${article}`)
                        ?
                        <span className={"product-card__favorites-true"}
                              onClick={removeToFavourite}>
        <i className="far fa-star"/></span>
                        :
                        <span className={"product-card__favorites"}
                              onClick={(event) => addToFavourite(event)}>
        <i className="far fa-star"/></span> : ''} 


                    {addToCartButton ? <Button  className='product-card__button' text='Add to cart' backgroundColor='pink' onClick={funAddToCart}></Button> : ''}
                </div>
                {modal && <Modal onClick={(event) => closeModalWindow(event)}
                                                header='Товар добавлен в корзину' text='Можете продолжить покупки'
                                                actions={<>
                                                    <button className={'modal__window-btn'} onClick={(event) => closeModalWindow(event)}>Продолжить покупки</button>
                                                </>} closeButton={true}></Modal>}
            </>
        );
    }


export default ProductCard;

ProductCard.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    price: PropTypes.number,
    url: PropTypes.string,
    article: PropTypes.string,
    color: PropTypes.string,
    favorite: PropTypes.bool
}

ProductCard.defaultProps = {
    price: 'none',
    article: 'none'
}
