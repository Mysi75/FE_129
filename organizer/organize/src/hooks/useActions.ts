import { useDispatch } from "react-redux";
import {bindActionCreators}from 'redux'
import { actions } from "../store/action-creatos";

export const useActions = () => {
    const dispatch = useDispatch ();
    return bindActionCreators(actions, dispatch);
}