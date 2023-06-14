import React, { useState, FormEvent ,useEffect} from "react";
import { auth } from "../../utils/dbConfig";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import {useNavigate} from 'react-router';
import { routes } from '../../utils/routes';


const MainPage: React.FC = () => {
    const {logInEmail, logInGoogle, registerInEmail } = useActions();
    const {user, loading, error} = useTypeSelector(state => state.user);
    const [userAuth, setUserAuth] = useState<User | null>(); 
    const [email, setEmail] = useState<string>('');
    const [password, setPassword]  = useState<string>(''); 
    const [form, setForm] = useState<boolean>(true);
    const navigaite = useNavigate();


    const logWithEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        logInEmail(email, password);
    }

    const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerInEmail(email, password);
    }

    useEffect (() => {
        if (user) {
            navigaite(routes.taskList)
        }
    }, [user]);

    // const addTask = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const task = {
    //         id: Date.now().toString(),
    //         title,
    //         content: content,
    //         date: new Date().toString(),
    //     };

    //     setOrganize(userAuth?.uid, task, userAuth?.displayName);
    // };

    return form ? (
        <div>
            <form onSubmit={logWithEmail}>
                <h2>Авторизация</h2>
                <input
                    type="text" 
                    placeholder="Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                         setEmail(e.target.value)}
                         value={email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
            <button onClick={logInGoogle}>Войти через Google</button>
            <button onClick={() => setForm(!form)}>Регистрация</button>
        </div>
    ) : (
        <div>
            <form onSubmit={registerUser}>
                <h2>Регистрация</h2>
            <input
                    type="text" 
                    placeholder="Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                         setEmail(e.target.value)}
                         value={email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)}
                />
                <button type="submit">Зарегестрироваться</button>
            </form>
             <button onClick={logInGoogle}>Войти через Google</button>
             <button onClick={() => setForm(!form)}>Авторизация</button>
        </div>
       
      
    );
};

export default MainPage;
