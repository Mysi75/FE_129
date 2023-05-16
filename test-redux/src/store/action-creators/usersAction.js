import { userActions } from "../reducers/userReducer";

export const addUserAction = (payload) => {
    return (dispatch) => {
        dispatch({ type: userActions.ADD_USER, payload });
    }
}
export const removeUserAction = (payload) => {
    return (dispatch) => {
        dispatch({ type: userActions.REMOVE_USER, payload });
    }
}

export const addAsyncUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: userActions.FETCH_USER });
            const responce = await fetch('https://fakestoreapi.com/users');
            // if (responce.exists()){
            let users = await responce.json();
            dispatch({ type: userActions.ADD_USER, payload: users });
            // }else {
            //     throw new Error("Data error")
            // }
        } catch (error) {
            dispatch({ type: userActions.ERROR_USER, payload: error.message });
        }
    }
}
