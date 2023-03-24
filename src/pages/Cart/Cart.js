
import React, {useState, useEffect} from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import Modal from '../../components/Modal/Modal'
import "../Cart/Cart.scss";


const Cart = (props) => {

    const [modal, setModal] = useState(false);
    const [allCart, setAllCart] = useState([]);
    const [article, setArticle] = useState();
;

    const showCartModal = (elementId) => {
        setArticle(elementId)
        setModal(true);
    };

    const closeCartModal = (event) => {
        setModal(false);
    }


    const removeFromCart = (event) => {
        
        let newArr = allCart.filter((element => {
            
          return  element.article !== article
        }));
        localStorage.setItem('AllCartProducts', JSON.stringify(newArr));
        setAllCart(newArr)
        setModal(false);
    
    };

useEffect(() =>{
    
    setAllCart(JSON.parse(localStorage.getItem('AllCartProducts')))
},[])



      const cartItem = allCart.map((item, index) =>
         <ProductCard
             name={item.name}
             price={item.price}
             pathToPic={item.pathToPic}
             article={item.article}
             color={item.color}
             closeButton={true} 
             onClick={()=>showCartModal(item.article)}
             key={index}
             setProductCard={true}
             star={false}
         />)

        return (
            cartItem[0] == null || undefined
            ?
            <div className="container"><h2>В корзину не добавлен ни один товар</h2></div> 
            :
            <div className="container"><div className="product-card__block">
         {cartItem}

        {modal && <Modal onClick={(event) => closeCartModal(event)}
                         header='Удалить товар из корзины?'
                         actions={<>
                             <button className={'modal__window-btn'} onClick={(event) => removeFromCart(event)}>Да</button>
                             <button className={'modal__window-btn'} onClick={(event) => closeCartModal(event)}>Отмена</button>
                         </>} closeButton={true}></Modal>}
            </div>
            </div>
        )
    }


export default Cart;
//
// import React from 'react';
// import CartItem from "../../components/CartItem/CartItem";
//
// const Cart = () => {
//
//     let productsArr = JSON.parse(localStorage.getItem('AllCartProducts'));
//     if (localStorage.getItem('AllCartProducts') === null || productsArr[0] === undefined) {
//         return (
//             <h2 className="cart__section-text">There is no products in the Cart</h2>
//         )
//     } else {
//         productsArr = JSON.parse(localStorage.getItem('AllCartProducts')).map((el, index) =>
//             <CartItem
//                 name={el.name}
//                 price={parseFloat(el.price)}
//                 url={el.url}
//                 article={el.article}
//                 color={el.color}
//                 key={index}
//             />);
//         return (
//             <div className="cart__products">
//                 {productsArr}
//             </div>
//         )
//     }
// };
//
// export default Cart;

