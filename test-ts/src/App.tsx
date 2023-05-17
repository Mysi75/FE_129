import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Text from './components/Text';

function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <Form edit={setText} />
      <Text text={text} />  
    </div>
  );
}

export default App;
