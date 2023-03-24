import React, {useState} from "react";
import PropTypes from "prop-types";

const FavouritesItem = (props) => {
    const [activeProduct, setactiveProduct] = useState(true);
    const {name, price, pathToPic, article, color} = props;

    const removeFromFavourite = () => {
        let arr = JSON.parse(localStorage.getItem('Favourites'));
        localStorage.removeItem(`Favourites Product ${article}`);
        const newArr = arr.filter((item => item.article !== article));
        localStorage.setItem('Favourites', JSON.stringify(newArr));
        setactiveProduct(false);
    }

    return (
        <>
            {activeProduct
                ?
                <div className="product-card__container">
                    <img className="product-card__image" src={pathToPic} alt={"lipstick"}/>
                    <p className="product-card__title">{name}</p>
                    <p className="product-card__price">{price}</p>
                    <p className="product-card__article">Article:{article}</p>
                    <p className="product-card__color">{color}</p>
                    <span className="product-card__favorites-true">
        <i className="far fa-star" onClick={removeFromFavourite}/></span>
                </div>
                :
                ''
            }

        </>
    );
}

export default FavouritesItem;

FavouritesItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    pathToPic: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    color: PropTypes.string
};

FavouritesItem.defaultProps = {
    price: 'none',
    color: 'none'
};
