import React, { useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Context } from '../..';
import { log } from 'console';


const Login: React.FC = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);
        // console.log(user);
        // console.log(auth);
        
        
    }

    return (
        <div className="container">
            <button onClick={login}>войти с помощью Googl</button>
           
        </div>
    )
}

export default Login;