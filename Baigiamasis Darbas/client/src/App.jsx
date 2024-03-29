import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainContext from './context/Main.jsx';
import './App.css';
// import Main from './context/Main.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
// import Users from './pages/User.jsx';
import Manager from './pages/Manager.jsx';

import NewUser from './components/new-user/NewUser.jsx';
import NewPost from './components/new-post/NewPost.jsx';
import EditPost from './components/edit-post/EditPost.jsx';

const App = () => {

  // const [showNewPost, setNewPost] = useState(false);
  const [user, setUser] = useState();
  
  // useEffect(() => {
  //   axios.get('http://localhost:3000/users/check-auth')
  //   .then(resp => setUser(resp.data))
  //   .catch(err => console.log(err));
  // }, []);

  const contextValues = {
    // showNewPost,
    // setNewPost,
    user,
    setUser
  }

  return (
    <>
      <h1>Seimo narių darbotvarkės registras</h1>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
          <Routes>
            {/* Prisijungimas */}
            <Route path='/login' element={<Login />} />
            
            {/* Atvaizduoja visus projektus */}
            <Route path='/' element={<Home />} /> 
            
            {/* Sukuria nauja projekta */}
            <Route path='/new-project' element={<NewPost />} />
            
            {/* Redaguoja projekta */}
            <Route path='/posts/edit-project/:identify' element={<EditPost />} />
            
            {/* Sukuria nauja vartotoja */}
            <Route path='/users/register' element={<NewUser />} />
            
            {/* Atvaizduoja visus vartotojus ,galima istrinti, redaguoti,
              ir prieti prie Naujo vartotojo sukurimo lango */}
            {/* <Route path='/users/' element ={<Users />} />    */}

             {/*Manager puslapis su visu useriu atvaizdavimu,
             ir new user (linkas) sukurimo mygtukas  */}
            <Route path='/manager' element={<Manager />} />

          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App