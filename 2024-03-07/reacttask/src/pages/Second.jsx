import Product from '../components/secondpage/product/Product.jsx';
import data from '../components/secondpage/data/data.js';

import '../pages/Second.css';

function Second() {
  
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

export default Second;
