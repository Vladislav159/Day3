import Product from './components/product/Product.jsx';
import data from './data/data.js';

import './App.css'

function App() {
  
  return (
    <>
     <div className = "cart">
        {data.map((value, index) =>
          <Product key={index} value={value}/>
          )}
      </div>
    </>
  )
}

export default App;
