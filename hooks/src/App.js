import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';

const App = () => {
  // const [{count, count2}, setCount] = useState({ count: 10, count2: 20 });
  // first value is value of state
  // second value is function that updates state

  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [values, handleChange] = useForm({email: '', password: '', firstName: ''});

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect (() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }

  // }, []);
  
  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c+ 1)}>increment</button>
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
      
      <input name='email' value={values.email} onChange={handleChange} placeholder='email' />
      <input type='password' value={values.password} name='password' onChange={handleChange} placeholder = 'password'/>
      <input name='firstName' value={values.firstName} onChange={handleChange} placeholder='firstName' />
    </div>
  )
}

export default App;