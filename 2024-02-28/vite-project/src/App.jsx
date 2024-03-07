import logotip from './assets/logo.svg';
import './App.css';
import Button from './components/buttons/Button.jsx';

//komponentas (COmponent)
function App() {
  // const [count, setCount] = useState(0)
  //Grazinamas turinys is komponento
  //JSX sintakse 
  //<> </> yra fragmentas(fragment)
  return (
        <>
          <img src={logo} />
          <h1>Hello World</h1>
          <h2>How are you?</h2>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sint eveniet accusantium voluptas sunt voluptates voluptate inventore fuga culpa cumque.</p>
          <Button />
        </> 
  ); 
  
}

export default App
