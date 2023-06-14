// import React , {useState, ChangeEvent as C, useEffect }from 'react';
// import { TEditComponent } from './type';
// import { useActions } from '../../../hooks/useActions';
// import { useTypeSelector } from '../../../hooks/useTypeSelector';
// import { ITask } from '../../../type/organizeType';
// import {update, ref} from 'firebase/database';
// import { db } from '../../../utils/dbConfig';


// const EditTask: TEditComponent = (props) => {
//     const {
//         id,
//         closeEdit,
//         edit
//     } = props;
//     const {getOrganize} = useActions();
//     const {user} = useTypeSelector(state => state.organize);
//     const [task, setTask] = useState<ITask | undefined>({
//         id: '',
//         content: '',
//         title: '',
//         date: ''
//     });
//     const [title, setTitle] = useState<string>('');
//     const[content, setContent] = useState<string>('');

//     const updateTask = () => {
//         const data = {
//             ...user,
//             tasks: user.tasks ? user.tasks.map(task => {
//                 if(task.id === id) {
//                     return {
//                         ...task,
//                         title,
//                         content
//                     }
//                 }else{
//                     return task
//                 }
//             }) : null
//         };

//         const updates = {};
//         //@ts-ignore
//         updates[`organize/${user.id}`] = data;
//         update(ref(db), updates);
//         getOrganize(user.id);
//         closeEdit({...edit, call: !edit.call});

//     }

//     useEffect (()=> {
//         if (user.tasks){
//             setTask(user.tasks.find((task: ITask) => task.id === id));
//         }
//         if(task) {
//             setTitle(task.title);
//             setContent(task.content);
//         }
//     }, [task, user]) ;  

//     return (
//         <div>
//             <input
//              type="text"
//             value={title}
//             onChange={(e: C<HTMLInputElement>) => setTitle(e.target.value)}
//             />
//             <textarea
//             value={content}
//             onChange={(e: C<HTMLTextAreaElement>) => setContent(e.target.value)}
//             ></textarea>
//             <button onClick={updateTask}>Сохранить изменения</button>
//             <button onClick={() => closeEdit({...edit, call: !edit.call})}>Закрыть без изменений</button>
//         </div>
//     )
// }



import React, { useState, ChangeEvent as C, useEffect } from "react";
import { TEditComponent } from "./types";
import { useActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { ITask } from "../../../type/organizeType";
import { update, ref } from 'firebase/database';
import { db } from "../../../utils/dbConfig";


const EditTasc: TEditComponent = (props) => {
    const {
        id,
        closeEdit,
        edit
    } = props;
    const { getOrganize } = useActions();
    const { user } = useTypeSelector(state => state.organize);
    const [tasc, setTasc] = useState<ITask | undefined>({
        id: '',
        content: '',
        title: '',
        date: ''
    });
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const updateTask = () => {
        const data = {
            ...user,
            tasks: user.tasks ? user.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        title,
                        content
                    }
                } else {
                    return task
                }
            }) : null
        };

        const updates = {};
        // @ts-ignore
        updates[`organize/${user.id}`] = data;
        update(ref(db), updates);
        getOrganize(user.id);
        closeEdit({...edit, call: !edit.call});
    }

    useEffect(() => {
        if (user.tasks) {
            setTasc(user.tasks.find((task: ITask) => task.id === id));
        }
        if (tasc) {
            setTitle(tasc.title);
            setContent(tasc.content);
        }
    }, [tasc, user]);

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e: C<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                onChange={(e: C<HTMLTextAreaElement>) => setContent(e.target.value)}
            ></textarea>
            <button onClick={updateTask}>Сохранить изменения</button>
            <button onClick={() => closeEdit({...edit, call: !edit.call})}>Закрыть без изменений</button>
        </div>
    )
}

export default EditTasc;