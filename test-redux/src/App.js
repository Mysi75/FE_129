import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {useActions} from './hooks/useAction';
// import { addUserAction, removeUserAction } from './store/redusers/userReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const {users} = useSelector(state => state.user);
  const {addUserAction, removeUserAction, addAsyncUsers} = useActions();

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  }

  const addUser = (name) => {
    const user = {
      name:{
        firstname: name
      },
      id: Date.now(),
    }
    addUserAction(user);
    // dispatch(addUserAction(user));
  }

  const removeUser = (id) => {
    removeUserAction(id)
    // dispatch(removeUserAction(id));
  }

  return (
    <div className="App">
      <div style={{ fontSize: 28 }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(+prompt())}>Пополнить счет</button>
        <button onClick={() => getCash(+prompt())}>Снять со счета</button>
        <button onClick={() => addUser(prompt())}>Добавить пользователя</button>
        <button onClick={addAsyncUsers}>Добавить пользователей</button>
      </div>
      {users.length > 0 ?
        <div>
          {users.map((user, i) =>
            <div key={i.toString()} onClick={() => removeUser(user.id)}>
              {user.name.firstname}
            </div>
          )}
        </div> :
        <div>Пользователей нет</div>
      }
    </div>
  );
}

export default App;
