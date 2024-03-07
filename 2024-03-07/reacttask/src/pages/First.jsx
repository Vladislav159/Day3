// import { Link } from 'react-router-dom';
 
 import '../pages/First.css'
import Logo from '../components/firstpage/logo/Logo.jsx'
import Search from '../components/firstpage/search/Search.jsx'
 import Navi from '../components/firstpage/navigation/Navi.jsx'
 import Picture from '../components/firstpage/logo/Picture.jsx'
import Intro from '../components/firstpage/info/Intro.jsx'
import Card from '../components/firstpage/card/Card.jsx'
import Button from '../components/firstpage/button/Button.jsx';

function First () {

  const data = [
    {
      title: 'Instant Server Start',
      content: 'On demand file serving over native ESM, no bundling required!'
    },
    {
      title: 'Lightning Fast HMR',
      content: 'Hot Module Replacement (HMR) that stays fast regardless of app size.'
    },
    {
      title: 'Rich Features',
      content: 'Out-of-the-box support for TypeScript, JSX, CSS and more.'
    },
    {
      title: 'Optimized Build',
      content: 'Pre-configured Rollup build with multi-page and library mode support.'
    },
    {
      title: 'Universal Plugins',
      content: 'Rollup-superset plugin interface shared between dev and build.'
    },
    {
      title: 'Fully Typed APIs',
      content: 'Flexible programmatic APIs with full TypeScript typing.'
    }
  ];

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

export default First
