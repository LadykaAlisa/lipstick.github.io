import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss'
import lips from '../../images/lips.png'


const SideBar = () => {
    return (
        <>
        <div className="link--menu">
        <div className='logo'><img src={lips} alt="lips" width='100px' /> </div>
                <div><NavLink exact className='link' activeClassName='link--active' to='/inbox'>Inbox</NavLink></div>
                <div><NavLink exact className='link' activeClassName='link--active' to='/favourites'>Favourites</NavLink></div>
                <div><NavLink exact className='link' activeClassName='link--active' to='/cart'><i
                    className="fas fa-shopping-cart"></i></NavLink></div>
        </div>
        </>
    );
};

export default SideBar;