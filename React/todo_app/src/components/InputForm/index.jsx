 import { useRef } from "react";
 
 const InputForm = (props) => {
    const inputRef = useRef(null);
    const {data, setData} = props;

    const getId = () => {
        let id = Math.floor(Math.random() * (1000-1) + 1)
        if (data.length === 0) return id;
        let flag = data.some(elem => elem.id === id);
        if (flag) {
            return getId();
        }
        return id;
    }

    const dataSend = (toDo) => {
        let id = getId();
        setData([...data, {id, toDo}]);
    }

    const formHandler = event => {
       event.preventDefault();
       console.log(inputRef);
        let toDo = inputRef.current.value;
        dataSend('toDo');
        inputRef.current.value = '';
       
    }
    return (
      <form onSubmit={formHandler}>
           <input ref={inputRef}type="text"/>
             <button type="submit">Добавить задачу</button>
         </form>
    );
}

 export default InputForm;

 
