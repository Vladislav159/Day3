import { useEffect, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import MainContext from '../context/Main.jsx';
// import axios from 'axios';


const Post = ({ data }) => {

    // const [loader, setLoader] = useState(false);

    // const handleDelete = (id) => {
    
    //     fetch('http://localhost:3000/posts/' + id, {
    //         method: 'DELETE' 
    //     })
    //     .then(resp => resp.text())
    // .then(resp => {
    //         console.log(resp)
    //         setLoader(!loader);
    // }   );
             
    // };

    return (
        <>  
            <tr>
                <td>{data.project_name}</td>
                <td>
                    <img src={'http://localhost:3000/uploads/' + data.photo} style={{ maxWidth: 50 }} />
                    
                </td>
                <td>{data.description}</td>
                <td>{data.created_at}</td>
                <td>{data.resolution_date}</td>
                <td>{data.stat_name.stat_name}</td>
               
                <td>
                        {/* <button 
                        className="btn btn-danger"
                        onClick={() => handleDelete(data._id)}
                    >
                        Ištrinti
                    </button>  */}
                    <Link 
                        to={'/posts/edit-project/' + (data._id)}
                        className="btn btn-warning"
                    >
                        Redaguoti projekta
                    </Link> 
                </td>
            </tr>

        </>
    );
}

export default Post;


