import { useEffect ,useState, useContext} from 'react';
import Post from '../components/post/Post.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import MainContext from './context/Main.jsx';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    //  const { showNewPost, setUser } = useContext(MainContext); 
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) return;

        axios.get('http://localhost:3000/posts/')
        .then(resp => {
            setData(resp.data)
        })
        .catch(err => {
            if(err.response.status === 401) {
                setUser(false);
                navigate('/');
            }
        });
    }, []);

    return (
        <>
            
            <div className="d-flex justify-content-between align-items-center">
            <Link to="/new-project" className="btn btn-success">Naujas Projektas</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Projekto pavadinimas</th>
                        <th>Nuotrauka</th>
                        <th>Aprasymas</th>
                        <th>Talpinimo data ir laikas</th>
                        <th>Norima svastymo data</th>
                        <th>Statusas</th> 
                       
                    </tr>
                </thead>
                <tbody>
                    {data.map(post => 
                        <Post 
                            data={post} 
                            // setLoading={setLoading} 
                            key={post._id} 
                        />
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Home;