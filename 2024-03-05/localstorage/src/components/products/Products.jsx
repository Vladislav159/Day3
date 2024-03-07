import { useState, useEffect } from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setshowForm] = useState(false);

    useEffect(() => {
        //Duomenu paemimas is localStorage
        //Patikrinimas ar negautas null rezultatas 
        // Konvertuojami duomenys is JSON stringo
        //Duomenu priskirymas prie state

        let data = localStorage.getItem('data');

        if (!data)
            return;


        data = JSON.parse(data);
        setProducts(data);
    }, [loading])

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for (const input of formData.entries()) {
            data[input[0]] = input[1];
        }
        //Tikrinam ar duomenys buvo issaugoti
        //Jeigu taip,tuomet zinome jog patalpinome kmasyva
        //i masyva galima deti papildoma produkta
        //Jeigu duomenys nebuvo issaugoti
        //Kuriame nauja masyva su vienu produktu
        console.log(localStorage.getItem('data'));

        const localData = localStorage.getItem('data');

        if (localData) {
            //Papildymas 
            //Veiksmu seka:
            //1.Konvertuojame stringa is JSON formato
            //2.Papildome masyva
            //3. Konvertuojame masyva atgal i JSON stringa
            //4.Issaugom stringa localStorage
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData);
        } else {
            //sukurimas
            localStorage.setItem('data', JSON.stringify([data]));
        }

        setLoading(!loading);

    }
    const handleDelete = (index) => {

        const localData = localStorage.getItem('data');

        let convertedData = JSON.parse(localData);
        convertedData.splice(index, 1);
        convertedData = JSON.stringify(convertedData);
        localStorage.setItem('data', convertedData);

        setLoading(!loading);

    }


    return (
        <>
            <h1 className="d-flex justify-content-between align-items-center">
                <span>Products</span>
                <button className='btn btn-success'
                    onClick={() => setshowForm(!showForm)}>
                    {showForm ? 'Hide Product Form' : 'Show Product Form'}
                </button>
            </h1>

            {products.length === 0 ? <div>No data</div> :
                <table className="table">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Photo</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data, index) =>
                            <tr key={index}>
                                <td> {data.title}</td>
                                <td> <img src={data.photo} style={{ maxWidth: 100 }} /></td>
                                <td> {data.price}</td>
                                <td> {data.qty}</td>
                                <td><button onClick={() => handleDelete(index)}>Delete</button ></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
            {showForm &&
                <>
                    <h2>New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Produkto pavadinimas</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                            />

                        </div>
                        <div className="mb-3">
                            <label>Produkto nuotrauka</label>
                            <input
                                type="text"
                                className="form-control"
                                name="photo"
                            />

                        </div>
                        <div className="mb-3">
                            <label>Produkto kaina</label>
                            <input
                                type="text"
                                className="form-control"
                                name="price"
                            />

                        </div>
                        <div className="mb-3">
                            <label>Kiekis sandelyjea</label>
                            <input
                                type="text"
                                className="form-control"
                                name="qty"
                            />

                        </div>
                        <button className="btn btn-primary">Prideti</button>

                    </form>
                </>
            }
        </>

    )
}

export default Products;