import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import Admin from './pages/admin/Admin';
import NewUser from './pages/admin/NewUser';
import EditUser from './pages/admin/EditUser';
import './App.css'

const App = () => {
  // CRUD:
  // CREATE
  // READ
  // UPDATE
  // DELETE

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route'ų (kelių) registravimas */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/new-user" element={<NewUser />} />
          <Route path="/admin/edit-user/:identify" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App