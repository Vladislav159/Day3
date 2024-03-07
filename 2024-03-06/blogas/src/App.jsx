import { useState } from 'react'
import Search from './components/search/Search.jsx'
import Logo from './components/logo/Logo.jsx'
import Social from './components/social/Social.jsx'
import Posts from './components/posts/Posts.jsx'
import Newpost from './components/new/Newpost.jsx'
import './App.css';


function App() {
  const [reload, setReload] = useState(false);

  return (
    <>
   
      <header>
        <div className="container d-flex ">
          <div className="search">
            <Search />
          </div>
          <div className="logos">
            <Logo />
          </div>
          <div className="navigation">
            <nav>
              <Social />
            </nav>
          </div>
        </div>
      </header>
      
      <main >
        <div className="cont">
           <Posts reload={reload} />
        </div>
      </main>

      <div className="seccontainer">
        <div>
            <Newpost setReload={setReload} /> 
        </div>
      </div>
    </>
  )
}

export default App
