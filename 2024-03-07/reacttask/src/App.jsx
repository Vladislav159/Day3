import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header'
import './App.css'
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Fifth from './pages/Fifth';

function App() {


  return (
    <>
      <BrowserRouter>
    {/* <Header /> */}
       <div className="container">
       <Routes>
      
          <Route path="/first" element={<First />} /> 
          <Route path="/second" element={<Second />} /> 
          <Route path="/third" element={<Third />} /> 
          <Route path="/fourth" element={<Fourth />} /> 
          <Route path="/fifth" element={<Fifth />} /> 
       </Routes>
       </div>
    </BrowserRouter>
    </>
  )
}

export default App
