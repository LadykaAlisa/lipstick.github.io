import React from 'react';
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favourites from '../pages/Favourites/Favourites'
import  Cart from '../pages/Cart/Cart'
import  Main from '../components/Main/Main'

const AppRoutes = props => {
    return (
        <HashRouter> 
              <Switch>
            <Redirect exact from='/' to='/inbox' />
            <Route exact path="/inbox" component={Main}></Route>
            <Route exact path="/favourites" component={Favourites}></Route>
            <Route exact path="/cart" component={Cart} ></Route>
        </Switch>
       </HashRouter>
     
    );
};

AppRoutes.propTypes = {
    onClick:PropTypes.func.isRequired
};

export default AppRoutes;