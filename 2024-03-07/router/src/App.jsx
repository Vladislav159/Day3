import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/header/Header';

function App() {
  

  return (
    <>
     
    <BrowserRouter>
    <Header />
       <div className="container">
       <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
       </div>
    </BrowserRouter>
      
      

    </>
  )
}

export default App
