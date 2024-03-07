
import { useState } from "react"

const Calculator = () => {
    
    const [values, setValue] = useState("");
//    console.log(typeof value, setValue);
 

    return (
        <>
    
        <div>
            <button value ="0" onClick ={e => setValue(values + e.target.textContent )}>0</button>            
            <button value ="1" onClick ={e => setValue(values + e.target.textContent)}>1</button>
            <button value ="2" onClick ={e => setValue(values + e.target.textContent)}>2</button>
            <button value ="3" onClick ={e => setValue(values + e.target.textContent )}>3</button>
            <button value ="4" onClick ={e => setValue(values + e.target.textContent )}>4</button>
            <button value ="5" onClick ={e => setValue(values + e.target.textContent )}>5</button>
            <button value ="6" onClick ={e => setValue(values + e.target.textContent )}>6</button>
            <button value ="7" onClick ={e => setValue(values + e.target.textContent )}>7</button>
            <button value ="8" onClick ={e => setValue(values + e.target.textContent )}>8</button>
            <button value ="9" onClick ={e => setValue(values + e.target.textContent )}>9</button>
         </div>
         <div>   
            <button value ="+" onClick ={e => setValue(values + e.target.textContent )}>+</button>
            <button value ="-" onClick ={e => setValue(values + e.target.textContent )}>-</button>
            <button value ="/" onClick ={e => setValue(values + e.target.textContent )}>/</button>
            <button value ="*" onClick ={e => setValue(values + e.target.textContent )}>*</button>
            <button value ="=" onClick ={e => setValue(eval(values))} >Result</button>
        </div>
        
              {values} 
       
      
        </>

    )
    
}
export default Calculator;