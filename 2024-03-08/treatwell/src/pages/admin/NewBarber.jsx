 import { useNavigate } from 'react-router-dom';

const NewBarber = () => {
    //  Peradresavimo (redirect) kūrimas
     const navigate = useNavigate();

    //  Produkto formos submitas
     const handleSubmit = (e) => {
        e.preventDefault();

    //   Duomenų iš formos paėmimo pradžia
       const formData = new FormData(e.target);
         const data = {};

        for(const input of formData.entries()) {
            data[input[0]] = input[1];
         }
    //     Duomenų iš formos paėmimos pabaiga
        
    //      Duomenų iš localStorage paėmimas
         const localData = localStorage.getItem('data');

    //      Patikrinimas ar jie egzistuoja
        if(localData) {
             // Produkto pridėjimas jau esančiame masyve
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
             localStorage.setItem('data', convertedData);
         } else {
    //   Produkto pridėjimas naujame masyve
            localStorage.setItem('data', JSON.stringify([data]));
         }
        
    //      Peradresavimo iniciavimas
         navigate('/admin');
    }

    return (
        <>
            <h1>New Barber</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="names"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Telefono numeris</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="phone"
                    /> 
                </div>
                <div className="mb-3">
                    <label>El. Pastas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="email"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Valandinis ikainis</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Ivertinimas</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="eval"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Aprasymas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="description"
                    /> 
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        </>
        
    );
}

export default NewBarber;