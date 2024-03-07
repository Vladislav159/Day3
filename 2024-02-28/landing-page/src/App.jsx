import './App.css'
import Logo from './components/logo/Logo.jsx';
import Search from './components/search/Search.jsx';
import Navi from './components/navigation/Navi.jsx';
import Picture from './components/logo/Picture.jsx';
import Intro from './components/info/Intro.jsx';
import Card from './components/card/Card.jsx';
import Button from './components/button/Button.jsx';

function App() {
  

  return (
    <>
      <header>
        <div className="container">
            <div className="logos">
                <Logo />  
             
               <div className="search">
                   <Search />
                </div> 
            </div> 
            <div className="navigation">
              <nav>
                <Navi />
              </nav>
            </div>
        </div>
      </header>
      <div className ="intro">
              <div className ="textas">
                  <Intro />
                  <div className = "buttons">
                      <Button text="Get Started" style="active"/>
                      <Button text="Why Vite?"/>
                      <Button text="View on GitHub"/>
                      <Button text="ViteConf" style="active" showIcon={true}/>
                  </div>
              </div>
              <div className ="picture">
                  <Picture />
              </div>
      </div>
      <div>
        <div className = "cards">
            {data.map((value, index) =>
                <Card key={index} value={value}/>

            )}
        </div>
      </div>
        
      
    </>
  )
}

export default App
