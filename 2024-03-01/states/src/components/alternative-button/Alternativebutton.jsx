import { useState } from 'react';

const Alternativebutton = () => {
    const [count, setCount] = useState(0)
    return (
        <>
        <h2>Mygtuko paspaudimas kitaip</h2>
        <div>Rezultatas: {count}</div>
        <button onClick ={() => setCount(count + 1)}>Paspausk mane</button> 
        </>
    )
}
export default Alternativebutton ;