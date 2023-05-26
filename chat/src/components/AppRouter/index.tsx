import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../..';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publickRoutes } from '../../routes';
import Chat from '../Chat';
import Login from '../Login';
import { Context, TContext } from '../..';

const Approuter: React.FC = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    console.log(auth);

    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path='*' element={<Chat />} />
            </Routes>
        ) :
        (
            <Routes>
                {publickRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path='*' element={<Login />} />
            </Routes>
        )
}

export default Approuter