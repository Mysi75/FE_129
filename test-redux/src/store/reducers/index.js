import { combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import {  userReducer } from './userReducer'

export const rootReducer = combineReducers ({
    cash: cashReducer,
    user: userReducer,
});