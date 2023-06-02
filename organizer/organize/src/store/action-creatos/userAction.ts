import { sign } from "crypto";
import { UserActionsType, UserActions} from "../../type/userType";
import {auth} from "../../utils/dbConfig";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { Dispatch } from "redux";

export const logInGoogle =() => {
    return async  (dispatch: Dispatch<UserActions>) => {
        dispatch({type: UserActionsType.FETCH_USER});
        try {
            const provider = new GoogleAuthProvider()
            const { user } = await signInWithPopup(auth, provider);
            dispatch({type: UserActionsType.USER_SUCCESS, payload: user});
        } catch (error) {
            dispatch({
                type: UserActionsType.USER_ERROR,
                 payload: 'Не получилось войти'
                });
        }
    }
}

export const logInEmail =(email: string, password: string) => {
    return async  (dispatch: Dispatch<UserActions>) => {
        dispatch({type: UserActionsType.FETCH_USER});
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            dispatch({type: UserActionsType.USER_SUCCESS, payload: user});
        } catch (error) {
            dispatch({
                type: UserActionsType.USER_ERROR,
                 payload: 'Не получилось войти'
                });
        }
    }
}

export const registerInEmail =(email: string, password: string) => {
    return async  (dispatch: Dispatch<UserActions>) => {
        dispatch({type: UserActionsType.FETCH_USER});
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            dispatch({type: UserActionsType.REGISTER_USER, payload: user});
        } catch (error) {
            dispatch({
                type: UserActionsType.USER_ERROR,
                 payload: 'Не получилось зарегестрироваться'
                });
        }
    }
}

export const logOutUser = () => {
    return async (dispatch: Dispatch<UserActions>) => {
        dispatch({type: UserActionsType.FETCH_USER});
        await signOut(auth);
        dispatch({type:UserActionsType.USER_LOGOUT});

    }
}