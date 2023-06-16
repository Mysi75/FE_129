import {Dispatch} from "redux";
import { OrganizeActionTypes, OrganizeActions, ITask } from "../../type/organizeType";
import {child, get, set, ref, update} from "firebase/database";
import { db } from "../../utils/dbConfig";

export const  getOrganize = (uId: string | null | undefined) => {
    return async (dispatch: Dispatch<OrganizeActions>) => {
        try {
            dispatch({type: OrganizeActionTypes.FETCH_ORGANIZE});
            const response = await get(child(ref(db), `organize/$(uId)`));
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
    uId: string | null | undefined, 
    task: ITask,
     name: string | null | undefined) => {
    return async (dispach: Dispatch<OrganizeActions>) => {
        try {
            dispach({type :OrganizeActionTypes.FETCH_ORGANIZE});
            set(ref(db, `organize/${uId}`), {
                id: uId,
                name: name,
                tasks: [task],
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

export const clearOrganize = () => {
    return (dispatch: Dispatch<OrganizeActions>) => {
        dispatch({type: OrganizeActionTypes.CLEAR_ORGANIZE})
    }
}

export const editOrganize = (
    uId: string | null | undefined,
    task: ITask)  => {
        return async (dispatch: Dispatch<OrganizeActions>) => {
            dispatch({type: OrganizeActionTypes.FETCH_ORGANIZE});
            try {
                const response = await get(child(ref(db),`organize/$(uId)`));
                if(response.exists()){
                    const oldTasc = response.val();
                    oldTasc.tasks = [...oldTasc.tasks, task];
                    await update(ref(db, `organize/${uId}`), oldTasc);
                    dispatch({type: OrganizeActionTypes.EDIT_TASK, payload: 'Данные обновлены'});
                }else{
                    throw new Error();
                }
            } catch (error) {
                dispatch({
                    type: OrganizeActionTypes.ERROR_ORGANIZE,
                     payload: 'Не удалось обновить данные'
                    });

            }
        }

}

