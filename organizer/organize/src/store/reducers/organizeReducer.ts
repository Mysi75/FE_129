import { OrganizeState } from "../../type/organizeType";
import { OrganizeActions, OrganizeActionTypes } from "../../type/organizeType";

const initialState: OrganizeState = {
    user: {
        id: '',
        name: '',
        tasks: null
    },
    loading: false,
    error: null,
    success: ''
}
export const organizeReducer = (
    state = initialState, 
    action:  OrganizeActions): OrganizeState => {
    switch (action.type) {
        case OrganizeActionTypes.FETCH_ORGANIZE:
            return {
                loading: true,
                 success: '',
                  error: null,
                   user: state.user
                };
         case OrganizeActionTypes.GET_ORGANIZE:
            return {
                loading: false,
                success: '',
                error: null,
                user: action.payload
            };
            
        case OrganizeActionTypes.SET_ORGANIZE:
            return{
                loading: false,
                success: action.payload,
                error: null,
                user: state.user
            };
            
         case OrganizeActionTypes.EDIT_TASK:
            return{
                loading: false,
                success:action.payload,
                error: null,
                user: state.user
            };
            
         case OrganizeActionTypes.ERROR_ORGANIZE:
            return {
                loading: false,
                success: action.payload,
                error: null,
                user: state.user
            };
            
         case OrganizeActionTypes.REMOVE_TASK:
            return {
                loading: false,
                success: '',
                error: action.payload,
                user: state.user
            };
            
            case OrganizeActionTypes.CLEAR_ORGANIZE:
                return{
                    loading: false,
                    error: null,
                    user: initialState.user,
                    success: ''
                }

        default:
            return state;
    }
}