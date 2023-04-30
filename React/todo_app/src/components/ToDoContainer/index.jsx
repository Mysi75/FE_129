 import { useState, useEffect } from "react";
 import InputForm from "../InputForm";
 import ToDoItem from "../ToDoItem";
 import style from "./ToDoContainer.module.css";

 const ToDoContainer = () => {
    const [toDo, setToDo] = useState([]);

    const itemHandler = id => {
        let newToDo = toDo.filter(item => item.id !== id);
        setToDo(newToDo);
    }

    useEffect(() => {
        console.log(toDo);
    })

    return (
        <div className={style.container}>
            <InputForm data={toDo} setData={setToDo}/>
            <ul className={style.list}>
                {toDo.map((elem, i) => <ToDoItem
                key={i.toString()}
                    item={elem}
                    deletItem={itemHandler}
                />)}
            </ul>
         </div>
    );
 }

 export default ToDoContainer;

