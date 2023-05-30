import {Dispatch} from "redux";
import { OrganizeActionTypes, OrganizeActions, ITask } from "../../type/organizeType";
import {child, get, set, ref, update} from "firebase/database";
import { db } from "../../utils/dbConfig";

export const  getOrganize = (uid: string | null | undefined) => {
    return async (dispatch: Dispatch<OrganizeActions>) => {
        try {
            dispatch({type: OrganizeActionTypes.FETCH_ORGANIZE});
            const response = await get(child(ref(db), `organize/ $(uid)`));
            if (response.exists()){
                dispatch({
                    type:OrganizeActionTypes.GET_ORGANIZE,
                    payload: response.val()
                });
            }else{
                throw new Error()
            }
        }catch (error) {
            dispatch({
                type: OrganizeActionTypes.ERROR_ORGANIZE,
                payload: 'Произошла ошибка',
            });
        }
    }
}

export const setOrganize = (
    uid: string | null | undefined, 
    task: ITask,
     name: string | null | undefined) => {
    return async (dispach: Dispatch<OrganizeActions>) => {
        try {
            dispach({type :OrganizeActionTypes.FETCH_ORGANIZE});
            set(ref(db, `organize/${uid}`), {
                id: uid,
                name: name,
                task,
            });
            dispach({
                type: OrganizeActionTypes.SET_ORGANIZE,
                payload: 'Данные успешно отправлены'
            })
        }catch (error) {
            dispach({
                type: OrganizeActionTypes.ERROR_ORGANIZE,
                payload: 'Произошла ошибка при отпраке данных'
            });
        }
    }
}

