import React from 'react';
import { useTypeSelector } from '../../hooks/useTypeselector';
import { useActions } from '../../hooks/useActions';
import { Link } from 'react-router-dom';
import { getOrganize } from '../../store/action-creatos/organize';
import {useNavigate} from 'react-router'
import { routes } from '../../utils/routes';
import {useEffect} from 'react'


const UserPage: React.FC = () => {
    const {user} =useTypeSelector(state => state.user);
    const {user: userT, loading, success, error} = 
    useTypeSelector(state => state.organize);
    const {setOrganize, logOutUser, clearOrganize} = useActions ();
    const navigate = useNavigate()


    const logOut = () => {
        logOutUser();
        clearOrganize();
    }

    useEffect(() => {
     if (!userT.id) {
        getOrganize(user?.uid);
     }
        if(!userT) {
        navigate(routes.mail)
        }
    }, [user, userT])
    
    return (
        <div>
            <button onClick={logOut}>Выйти</button>
            {user?.email}
            {userT.tasks?.map((task, i) => {
                return (
                    <div key={i.toString()}>
                        <h2>{task.title}</h2>
                        <p>{task.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UserPage;