import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { LOGIN_ROUTE } from '../../utils/rutes';
// import { auth } from '../..';
import { Context, TContext} from '../..';
//@ts-ignore
import style from './Navbar.module.css';

const Navbar: React.FC = () => {
    const {auth} = useContext<null | TContext | any>(Context);
    const [user] = useAuthState(auth);


    return (
        <div className={style.navbar}>
            <div className={style.nav}>
                {user ? 
                    <button className={style.button} onClick={() => signOut(auth)}>Выйти</button>:
                    <Link to={LOGIN_ROUTE}>
                        <button>Логин</button>
                    </Link>    
            }
            </div>
        </div>
    )
}


export default Navbar