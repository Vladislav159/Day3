import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        // Paimame produktus iš localStorage
       fetch('http://localhost:3000/users/')
       .then(resp => resp.json())
       .then(resp => setData(resp))
        
    }, [loader]);

   
    const handleDelete = (id) => {
        
        fetch('http://localhost:3000/users/' + id, {
            method: 'DELETE' 
        })
        .then(resp => resp.text())
    .then(resp => {
            console.log(resp)
            setLoader(!loader);
    }   );
        // Duomenų priskyrimas į localStorage
        

        // Komponento atnaujinimas
        
    };

    return (
        <>  
            <div className="d-flex justify-content-between align-items-center">
                <h2>Admin</h2>
                <Link to="/admin/new-user" className="btn btn-success">Naujas Vartotojas</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nuotrauka</th>
                        <th>Vardas</th>
                        <th>Pavarde</th>
                        <th>El. Pasto adresas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => 
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>
                                <img src={item.photo} style={{ maxWidth: 50 }} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                  <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Ištrinti
                                </button> 
                                <Link 
                                    to={'/admin/edit-user/' + (item._id)}
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