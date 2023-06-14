// import  React , { useState, FormEvent as F, ChangeEvent as C }from 'react';
// import { useTypeSelector} from '../../../hooks/useTypeselector';
// import { useActions } from '../../../hooks/useActions';
// import { useNavigate } from 'react-router';
// import { ITask } from '../../../type/organizeType';
// import { routes } from '../../../utils/routes';


// const AddTask: React.FC = () => {
//     const {user} = useTypeSelector(state => state.user);
//     const {user: Tuser} =useTypeSelector(state => state.organize);
//     const {setOrganize, editOrganize} = useActions();
//     const [title, setTitle] = useState<string>('');
//     const [content, setContent] =useState<string>('');
//     const navigate = useNavigate();

//     const addTask = (e: F<HTMLFormElement>) => {
//         e.preventDefault();
//         const task: ITask = {
//             id: Date.now().toString(),
//             title: title,
//             content,
//             date: new Date().toString()
//         };
//         if (Tuser.tasks?.length?? false) {
//             editOrganize(user?.uid, task);
//         }else{
//             setOrganize(user?.uid, task,user?.displayName);
//         }
//         navigate(routes.taskList);
//     }

//     return(
//         <div>
//             <form onSubmit={addTask}>
//                 <input
//                  type="text" 
//                  onChange={(e: C<HTMLInputElement>) => setTitle(e.target.value)}
//                  value={title}
//                  />
//                  <textarea 
//                  value={content}
//                  onChange={(e: C<HTMLTextAreaElement>) => setContent(e.target.value)}
//                  ></textarea>
//                  <button type="submit">Добавить запись</button>
              
//             </form>
//         </div>
//     )
// }

// export default AddTask;

import React, { useState, FormEvent as F, ChangeEvent as C } from "react";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router";
import { ITask } from "../../../type/organizeType";
import { routes } from "../../../utils/routes";




const AddTasc: React.FC = () => {
    const { user } = useTypeSelector(state => state.user);
    const { user: Tuser } = useTypeSelector(state => state.organize);
    const {setOrganize, editOrganize} = useActions();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const navigate = useNavigate();

    const addTasc = (e: F<HTMLFormElement>) => {
        e.preventDefault();
        const tasc: ITask = {
            id: Date.now().toString(),
            title: title,
            content,
            date: new Date().toString()
        };
        if (Tuser.tasks?.length ?? false){
            editOrganize(user?.uid, tasc);
        }else{
            setOrganize(user?.uid, tasc, user?.displayName);
        }
        navigate(routes.taskList);
    }

    return (
        <div>
            <form onSubmit={addTasc}>
                <input
                    type="text"
                    onChange={(e: C<HTMLInputElement>) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea
                    value={content}
                    onChange={(e: C<HTMLTextAreaElement>) => setContent(e.target.value)}
                ></textarea>
                <button type="submit">Добавить запись</button>
            </form>
        </div>
    )
}

export default AddTasc;

