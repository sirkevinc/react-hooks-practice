import React, {useState} from 'react';
import { useForm } from './useForm';

const App = () => {
  // const [{count, count2}, setCount] = useState({ count: 10, count2: 20 });
  // first value is value of state
  // second value is function that updates state

  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [values, handleChange] = useForm({email: '', password: ''});
  
  return (
    <div>
      {/* <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1 }))}>+</button> */}
      {/* <button onClick={() => {
        setCount(c => c + 1);
        setCount2(c => c + 1);
      }}>
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div> */}
      
      {/* <input name='email' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='password' value={password} name='password' onChange={e => setPassword(e.target.value)}/> */}
      
      <input name='email' value={values.email} onChange={handleChange} />
      <input type='password' value={values.password} name='password' onChange={handleChange} />
    </div>
  )
}

export default App;