import {UserActionsType, IUser, UserActions} from '../../type/userType';

const initialState: IUser = {
    user: null,
    loading: false,
    error: null,
}

export const userReducer = (
    state = initialState,
    action: UserActions

): IUser => {
    switch (action.type) {
        case UserActionsType.FETCH_USER:
            return{user: state.user,loading: true, error: null};
         case UserActionsType.USER_SUCCESS:
            return {user: action. payload, loading: false, error: null};
        case UserActionsType.REGISTER_USER:
           return{user: action. payload, loading: false, error: null};
        case UserActionsType.USER_ERROR:
            return{user: null, loading: false, error: action.payload};
        case UserActionsType.USER_LOGOUT:
            return {user: null, loading: false, error: null}   
            default:
                return state; 
    }
}