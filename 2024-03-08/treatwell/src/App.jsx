import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Client from './pages/user/Client'
import Admin from './pages/admin/Admin'
import NewBarber from './pages/admin/NewBarber'
import EditBarber from './pages/admin/EditBarber';
 import './App.css'

function App() {


  return (
    
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/newbarber" element={<NewBarber />} />
          <Route path="/admin/edit-barber/:indentifikatorius" element={<EditBarber />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
