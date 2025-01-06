
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
    <p>Lorem ipsum dolor sit amet.{count} <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis. Numquam cum perspiciatis id minus labore deleniti aperiam quis inventore.{count} <br />
    Lorem ipsum dolor sit amet.{count} <br />
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odit doloremque, optio a nam at dolor nisi aliquam placeat quam.{count}
    </p>
     <button>{count}</button>
     <br />
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>

     <h3>SO in this way we can change the state through useState hook in React example : {count}</h3>
    </>
   )
}

export default App
