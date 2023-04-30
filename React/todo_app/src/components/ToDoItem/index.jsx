import './ToDoItem.css';

const ToDoItem = (props) => {
    const {item, deletItem} = props;

    return (
        <li className='item'>
            <p className='item__text'>{item.toDo}</p>
            <button 
                className='item__button' 
                onClick={() => deletItem(item.id)}
            >Dell</button>
             
        </li>
    );
}

export default ToDoItem;