import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
 import * as UserActionCreator from "../store/action-creators/usersAction";
 import { userActions } from "../store/reducers/userReducer";

 export const useActions = () => {
    
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreator, dispatch);
}