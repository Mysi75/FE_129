const defaultState = {
    users: [],
    loading: false,
    errors: null,
}

export const userActions = {
    ADD_USER: "ADD_USER",
    REMOVE_USER: "REMOVE_USER",
    FETCH_USER: "FETCH_USER",
    ERROR_USER: "ERROR_USER"
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case userActions.ADD_USER:
            return {
                loading: false,
                errors: null,
                users: [...state.users, ...action.payload], 
            };
        case userActions.REMOVE_USER:
            return {
                loading: false,
                errors: null, 
                users: state.users.filter(user => 
                    user.id !== action.payload)
                };
        case userActions.FETCH_USER:
            return {
                loading: true,
                errors: null,
                users: state.users
            }
        case userActions.ERROR_USER:
            return {
                loading: false,
                errors: action.payload,
                users: state.users,
            }
        default:
            return state;
    }
}
