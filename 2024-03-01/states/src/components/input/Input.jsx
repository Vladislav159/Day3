import { useState } from 'react';

const Input = () => {

    //state sukurimas
    const [fieldValue, setFieldValue] = useState();

    //Laukelyje ivestos reiksmes priskyrimas prie state ir komponento atvaizd
    const handleChange = (e) => {
        setFieldValue(e.target.value);
      };

    return (
        <>
            <h2>Laukelio reiksme</h2>

            <input
                type="text"
                onChange={handleChange}
            />

            <div>{fieldValue}</div>
        </>
    )
}
export default Input;