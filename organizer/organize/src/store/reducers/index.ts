import {combineReducers} from 'redux'
import { organizeReducer } from './organizeReducer';
import { useReducer } from 'react';
import { userReducer } from './userReduser';

export const rootReducer = combineReducers({
    organize: organizeReducer,
    user: userReducer,
    
});

export type RootState = ReturnType<typeof rootReducer>;