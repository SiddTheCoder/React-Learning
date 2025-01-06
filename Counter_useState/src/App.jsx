
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'

function App() {
  let [count,setCount] = useState(10)

  const increment = () => {
    if(count>19){
      setCount(count)
    }
    else{
      setCount(count+1)
    }
  }
  const decrement = () => {
    if(count<1){
      setCount(count)
    }
    else{
      setCount(count-1)
    }
  }
   return(
    <>
     <button>{count}</button>
     <br />
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </>
   )
}

export default App
