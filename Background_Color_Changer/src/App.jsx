import React,{useState} from 'react'

function App() {

  const [color,setColor] = useState('black')

  
  return(
    <>
      <div className='w-full h-screen duration-200 ease-linear' style={{backgroundColor:color}}>
          <div
          className='text-white w-full h-auto text-4xl flex justify-center absolute top-32 text-center' 
          >A Background Color Changer Below your Hand !</div>
        <div className='w-full justify-center flex'>
        <div className='w-[80%] bg-[#5e9b70] h-auto sm:h-14 rounded-2xl absolute bottom-20 shadow-2xl flex items-center px-10 py-4 sm:py-0 gap-4 sm:gap-10 justify-center flex-wrap'>
          <button
          onClick={() => setColor('red')}
          className='p-3 rounded-2xl px-6 text-white'
          style={{backgroundColor:'red'}}
          >Red</button>

          <button
          onClick={() => setColor('green')}
          className='p-3 rounded-2xl px-6 text-white'
          style={{backgroundColor:'green'}}
          >Green</button>

          <button
          onClick={() => setColor('yellow')}
          className='p-3 rounded-2xl px-6 text-black'
          style={{backgroundColor:'yellow'}}
          >Yellow</button>

          <button
          onClick={() => setColor('cyan')}
          className='p-3 rounded-2xl px-6 text-black'
          style={{backgroundColor:'cyan'}}
          >Cyan</button>

          <button
          onClick={() => setColor('indigo')}
          className='p-3 rounded-2xl px-6 text-white'
          style={{backgroundColor:'indigo'}}
          >Indigo</button>

          <button
          onClick={() => setColor('wheat')}
          className='p-3 rounded-2xl px-6 text-black'
          style={{backgroundColor:'wheat'}}
          >Wheat</button>

          <button
          onClick={() => setColor('pink')}
          className='p-3 rounded-2xl px-6 text-black'
          style={{backgroundColor:'pink'}}
          >Pink</button>

          <button
          onClick={() => setColor('white')}
          className='p-3 rounded-2xl px-6 text-black'
          style={{backgroundColor:'white'}}
          >White</button>

          <button
          onClick={() => setColor('black')}
          className='p-3 rounded-2xl px-6 text-white'
          style={{backgroundColor:'black'}}
          >Black</button>

          <button
          onClick={() => setColor('brown')}
          className='sm:hidden p-3 rounded-2xl px-6 text-white'
          style={{backgroundColor:'brown'}}
          >Brown</button>
        </div>
        </div>
      </div>
     </>
  )
}

export default App
