import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header'
import './App.css'
import First from './pages/First';
import Second from './pages/Second';

function App() {


  return (
    <>
      <BrowserRouter>
    {/* <Header /> */}
       <div className="container">
       <Routes>
      
          <Route path="/first" element={<First />} /> 
          <Route path="/second" element={<Second />} /> 
          
       </Routes>
       </div>
    </BrowserRouter>
    </>
  )
}

export default App
