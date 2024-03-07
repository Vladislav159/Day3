const Form = () => {
   
    const handleSubmit = (e) => {

        //Create
        // Stand. html formos veikimo sustabdymas
        e.preventDefault();

        console.log(`Veikia`)
        const form = new FormData(e.target);
        
        for(const input of form.entries()) {
            console.log(input)
        }
            //Duomenu persiuntimas
    }

    return (

        <form onSubmit={handleSubmit}>
            <h1 className="mb-3">Formos submitas</h1>
            <div className ="mb-3">
                <input type="text"
                className="form-control"
                name="name"
                placeholder ="Pavadinimas"
                />
            </div>
            
            <div className ="mb-3">
                <input type="number"
                className="form-control"
                name="price"
                placeholder ="Kaina"
                />
            </div>
            <div className ="mb-3">
                <textarea
                name="description"
                className="form-control"
                placeholder ="Aprasymas"
                />
            </div>
            <button className="btn btn-primary">Issaugoti</button>
        </form>
    )

}
export default Form;