import { error } from 'console';
import {User} from 'firebase/auth' ;


export interface IUser {
    user: User | null,
    loading: boolean,
    error: string | null, 
}

export enum UserActionsType {
    REGISTER_USER = 'REGISTER_USER',
    FETCH_USER= 'FETCH_USER',
    USER_SUCCESS = 'USER_SUCCESS',
    USER_ERROR = ' USER_ERROR',
    USER_LOGOUT = 'USER_LOGOUT'
}

type FetchUserAction = {
    type: UserActionsType.FETCH_USER
}

type UserSuccessAction = {
    type: UserActionsType.USER_SUCCESS,
    payload: User,
}

type RegisterUserAction = {
    type: UserActionsType.REGISTER_USER,
    payload: User,
}

type LogoutUserAction = {
    type: UserActionsType.USER_LOGOUT,   
}

type ErrorUserAction = {
    type: UserActionsType.USER_ERROR,
    payload: string,
}

export type UserActions =
FetchUserAction |
UserSuccessAction |
ErrorUserAction |
RegisterUserAction |
LogoutUserAction ;

