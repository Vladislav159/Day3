import { useState } from 'react'
import Search from '../components/fifthpage/search/Search.jsx'
import Logo from '../components/fifthpage/logo/Logo.jsx'
import Social from '../components/fifthpage/social/Social.jsx'
import Posts from '../components/fifthpage/posts/Posts.jsx'
import Newpost from '../components/fifthpage/new/Newpost.jsx'
import './Fifth.css'

function Fifth() {
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

export default Fifth
