// import React from 'react';
// import { useTypeSelector } from '../../hooks/useTypeSelector';
// import { useActions } from '../../hooks/useActions';
// import { getOrganize } from '../../store/action-creatos/organize';
// import {useNavigate} from 'react-router'
// import { routes } from '../../utils/routes';
// import {useEffect, useState, Suspense} from 'react';
// import { update,ref } from 'firebase/database';
// import { db } from '../../utils/dbConfig';
// const EditTasc = React.lazy(() => import('./EditTasc'));




// const UserPage: React.FC = () => {
//     const {user} =useTypeSelector(state => state.user);
//     const {user: userT, loading, success, error} = 
//     useTypeSelector(state => state.organize);
//     const {getOrganize, logOutUser, clearOrganize} = useActions ();
//     const navigate = useNavigate()
//     const [edit, setEdit] = useState({
//         call: false,
//         id: '',
//     })


//     const logOut = () => {
//         logOutUser();
//         clearOrganize();
//     }

//     const removeTask = (id:string) => {
//         const data  = {
//             ...userT,
//             tasks:userT.tasks?
//             userT.tasks.filter(task => task.id !== id) : null
//         };

//         const updates = {};
//             //@ts-ignore
//             updates[`organize/${userT.id}`] = data;
//             update(ref(db), updates);
//             getOrganize(userT.id);

//         }
//     }

//     useEffect(() => {
//     //  if (!userT.id) {
//         getOrganize(user?.uid);
//     //  }
//         if(!user) {
//         navigate(routes.main)
//         }
//     }, [user, success])
    
//     return (
//         <div>
//             <button onClick={logOut}>Выйти</button>
//             {user?.email}
//             {userT.tasks?.map((task, i) => {
//                 return (
//                     <div key={i.toString()}>
//                         <h2>{task.title}</h2>
//                         <p>{task.content}</p>
//                         <button 
//                             onClick={() => setEdit({
//                              call: !edit.call,
//                              id: task.id,
//                              })}
//                         >Редактировать</button>
//                     </div>
//                 )
//             })}
//             <button onClick={() => navigate(routes.AddTasc)}>Добавить запись</button>
//             <div className="editComponent">
//                {edit.call ? <EditTasc id={edit.id} closeEdit={setEdit} edit={edit}/> : null } 
//             </div>
//         </div>
//     )
// }

// export default UserPage;

import React, { Suspense, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { useNavigate } from 'react-router';
import { routes } from '../../utils/routes';
import {update, ref} from 'firebase/database'
import { db } from '../../utils/dbConfig';
const EditTasc = React.lazy(() => import('./EditTasc'));


const UserPage: React.FC = () => {
    const { user } = useTypeSelector(state => state.user);
    const { user: userT, loading, success, error } =
        useTypeSelector(state => state.organize);
    const { getOrganize, logOutUser, clearOrganize } = useActions();
    const navigate = useNavigate();
    const [edit, setEdit] = useState({
        call: false,
        id: '',
    })

    const logOut = () => {
        logOutUser();
        clearOrganize();
    }

    const removeTask = (id: string) => {
        const data = {
            ...userT,
            tasks: userT.tasks ? userT.tasks.filter(task => task.id !== id) : null
        };

        const updates = {};
        // @ts-ignore
        updates[`organize/${userT.id}`] = data;
        update(ref(db), updates);
        getOrganize(userT.id);
    }

    useEffect(() => {
        // if (!userT.id) {
        getOrganize(user?.uid);
        // }
        if (!user) {
            navigate(routes.main)
        }
        console.log(userT.tasks);

    }, [user, success])

    return (
        <div>
            <button onClick={logOut}>Выйти</button>
            {user?.email}
            {userT.tasks?.map((task, i) => {
                return (
                    <div key={i.toString()}>
                        <h2>{task.title}</h2>
                        <p>{task.content}</p>
                        <button
                            onClick={() => setEdit({
                                call: !edit.call,
                                id: task.id,
                            })}
                        >Редактировать</button>
                        <button onClick={() => removeTask(task.id)}>
                            Удалить запись
                        </button>
                    </div>
                )
            })}
            <button onClick={() => navigate(routes.addTask)}>Добавить запись</button>
            <div className="editComponent">
                {edit.call ? 
                <Suspense fallback={<div>Loading...</div>}>
                    <EditTasc id={edit.id} closeEdit={setEdit} edit={edit} />
                </Suspense>:
                 null}
            </div>
        </div>
    )

                }
export default UserPage;
