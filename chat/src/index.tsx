import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { app } from './utils/db';

export type TContext = {
  auth: Auth,
  firestore: Firestore
}

export const Context = createContext<null | TContext | any>(null);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{auth, firestore}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
