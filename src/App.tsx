import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Input } from './components';
import { googleSignIn } from './firebase/auth';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input
        type="text"
        placeholder="Enter text here"
        value=""
        onChange={() => {
          console.log('ОСЬ');
        }}
      />
    </>
  );
}

export default App;
