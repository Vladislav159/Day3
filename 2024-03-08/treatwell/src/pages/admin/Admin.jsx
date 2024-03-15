 import { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';

const Admin = () => {
     const [data, setData] = useState([]);
     const [loader, setLoader] = useState(false);

     useEffect(() => {
    //    Paimame produktus iš localStorage
         const localData = JSON.parse(localStorage.getItem('data'));
        
         // Patikriname ar informacija egzistuoja
         if(localData) 
           setData(localData); //Priskiriame produktų informaciją prie state'o
     }, [loader]);

    //  Ištrynimo funkcija
     const handleDelete = (index) => {
        // Ištrynimas iš masyvo
        data.splice(index, 1);
       // Duomenų priskyrimas į localStorage
        localStorage.setItem('data', JSON.stringify(data));

    //      Komponento atnaujinimas
        setLoader(prev => !prev);
     }   

    return (
        <>  
        
        <div className="d-flex justify-content-between align-items-center">
                <h2>Barber list</h2>
                 <Link to="/admin/newbarber" className="btn btn-success">New Barber</Link> 
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nuotrauka</th>
                        <th> Vardas</th>
                        <th>Telefono numeris</th>
                        <th>El. paštas</th>
                        <th>Valandinis įkainis</th>
                        <th>Įvertinimas</th>
                        <th>Aprašymas</th>
                    </tr>
                </thead>
                 <tbody>
                    {data.map((barber, index) => 
                        <tr key={index}>
                            <td>{index}</td>
                            <td>
                                <img src={barber.photo} style={{ maxWidth: 50 }} />
                            </td>
                            <td>{barber.names}</td>
                            <td>{barber.phone}</td>
                            <td>{barber.email}</td>
                            <td>{barber.price}</td>
                            <td>{barber.eval}</td>
                            <td>{barber.description}</td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                                <Link 
                                    to={'/admin/edit-barber/' + index}
                                    className="btn btn-warning"
                                >
                                    Redaguoti
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody> 
            </table>

        </>
    );
}

export default Admin;