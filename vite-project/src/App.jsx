import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("John");

  const handleClick = () => {
    setName("Doe");
    console.log(name);
  };
}

return(
  <div>
    <button  onClick={handleClick()} >click</button>
  </div>
)

export default App
