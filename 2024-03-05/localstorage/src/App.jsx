import { useState, useEffect } from 'react'
import Products from './components/products/Products.jsx';
import './App.css'

function App() {
   const [value, setValue] = useState(0);

   useEffect(() => {
    //Infromacijos paemimas is localStorage vos tik uzsikrovus komponentui
    setValue(localStorage.getItem('text'));
   })

  const setLocalValue = (e) => {
    // INformacijos talpinimas i lokalu podeli (local storage)
    localStorage.setItem('text', 'Hello World');
    console.log(localStorage)
  }
  const getLocalValue = (e) => {
    setValue(localStorage.getItem('text'));
  }

  return (
    <>
      <h1>Local storage</h1>
      <div className="my-3">{value}</div>
      <button className="btn btn-primary"
      onClick={setLocalValue}>Set to local value</button>
       <button className="btn btn-primary"
      onClick={getLocalValue}>get local value</button>

      <Products />
    </>
  )
}

export default App
