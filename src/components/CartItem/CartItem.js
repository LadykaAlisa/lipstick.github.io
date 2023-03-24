import React, {useState, useEffect} from 'react';
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types';

const CartItem = (props) => {

    const [modal, setModal] = useState(false);
    const [cartItem, setсartItem] = useState(true);
    const {name, price, url, article, color} = props;

    const showCartModal = (event) => {
        setModal(true);
    };

    const closeCartModal = (event) => {
        setModal(false);
    }

    const removeFromCart = (event) => {
        let arr = JSON.parse(localStorage.getItem('AllCartProducts'));
        const newArr = arr.filter((item => console.log(item)));
        localStorage.setItem('AllCartProducts', JSON.stringify(newArr));
        setModal(false);
        setсartItem(false);
    };

    return (
        <>
            {cartItem
                ?
                <div className="product-item__container cart">
                    <button className="product-item-remove-btn"
                            onClick={(event) => showCartModal(event)}>X
                    </button>
                    <img className="product-item__photo" src={url} alt={"laptop_photo"}/>
                    <p className="product-item__name">{name}</p>
                    <p className="product-item__price">Price - {price}$</p>
                    <p className="product-item__article">Article - {article}</p>
                    <p className="product-item__color">Color - {color}</p>
                </div>
                : ''}
            {modal
                ?
                <Modal header={"DELETE?"} text={"\n" +
                "The product will be REMOVED from CART"} actions={
                    <>
                        <button className="modal__buttons-btn" onClick={(event) => removeFromCart(event)}> OK</button>
                        <button className="modal__buttons-btn" onClick={(event) => closeCartModal(event)}> Cancel
                        </button>
                    </>
                } onClick={closeCartModal}/>
                : ''}
        </>
    )
};

export default CartItem;


CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    url: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    color: PropTypes.string
};

CartItem.defaultProps = {
    price: 'not available',
    color: 'not available'
};
