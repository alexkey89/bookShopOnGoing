"use strict";
import {combineReducers} from 'redux';
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducer';
import {contactReducers} from './contactReducers';

export default combineReducers({
    books: booksReducers,
    cart: cartReducers,
    contact: contactReducers
})
