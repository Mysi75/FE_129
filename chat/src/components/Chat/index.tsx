import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, addDoc, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';
// @ts-ignore
import style from './Chat.module.css';

type TMassege = {
    uid: string,
    displayname: string,
    photoUrl: string,
    text: string,
    createAt: Timestamp,
}

    const Chat: React.FC = () => {
        const { auth, firestore } = useContext(Context);
        const [user] = useAuthState(auth);
        const [text, setText] = useState<string>('');
        const [massegess, loading, error] = useCollectionData(
            query(collection(firestore, 'massegess'), orderBy('createAt'))
        );
    
        console.log(massegess);
    
    
    
        const sendMassege = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
    
            await addDoc(collection(firestore, 'massegess'), {
                uid: user?.uid,
                displayname: user?.displayName,
                photoUrl: user?.photoURL,
                text,
                createAt: serverTimestamp(),
            });
            setText('');
        }
    
        if (loading) {
            return (
                <h1>Loading...</h1>
            )
        }


    return (
        <div className={style.container}>
            <div className={style.chat}>
                {massegess?.map((massege) => {
                    return (
                        <div
                            key={massege.createAt}
                            style={{
                                border: user?.uid == massege.uid ?
                                    '2px solid green' :
                                    '2px solid red',
                                justifyContent: user?.uid == massege.uid ?
                                'flex-start' :
                                '',
                                flexDirection: user?.uid == massege.uid ?
                                'row-reverse' :
                                'row'
                            }}
                            className={style.chatItem}
                        >
                            <div className={style.avatar}>
                                <img
                                    src={massege.photoUrl}
                                    alt={massege.displayname}
                                />
                            </div>
                            <div className={style.text}>{massege.text}</div>
                        </div>
                    )
                })}
            </div>
            <form className={style.formText} onSubmit={sendMassege}>
                <textarea
                    onInput={
                        (e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            setText(e.target.value)
                    }
                    value={text}
                    className={style.tArea}
                ></textarea>
                <button className={style.button} type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Chat;