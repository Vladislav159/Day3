

const NewPost = ({ setReload }) => {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        //Formos duomenu paemimas ir priskyrimas data objektui
        const formData = new FormData(e.target);
        const data = {};

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        };

        const localData = localStorage.getItem('data')
        if(localData) {
            let convertData = JSON.parse(localData);
            convertData.push(data);
            convertData = JSON.stringify(convertData);
            localStorage.setItem('data', convertData)

        }else {
            localStorage.setItem('data', JSON.stringify([data]))
        }

        setReload(prev => !prev);
    }
    


    return(
        <>
            <h3 >New Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Post Title</label>
                    <input
                        type="text"
                        className="form-control rounded-pill border border-2 px-2"
                        
                       name="title"
                    />
                </div>
                <div className="mb-3">
                    <label>Post Category</label>
                    <input
                        type="text"
                        className="form-control rounded-pill border border-2 px-2"
                       
                       name="category"
                    />
                </div>
                <div className="mb-3">
                    <label>Post Image</label>
                    <input
                        type="text"
                        className="form-control rounded-pill border border-2 px-2"
                        
                       name="image"
                    />
                </div>
                <div className="mb-3">
                    <label>Post Content</label>
                    <input
                        type="text"
                        className="form-control rounded-pill border border-2 px-2"
                      
                       name="content"
                    />
                </div>
                <div className="mb-3">
                    <label>Post Author</label>
                    <input
                        type="text"
                        className="form-control rounded-pill border border-2 px-2"
                       name="author"
                    />
                </div>
                <div className="mb-3">
                    <label>Post Author Role</label>
                    <input
                        type="text"
                        className="form-control rounded-pill border border-2 px-2"                      
                       name="role"
                    />
                </div>
                <div className="mb-3">
                    <label>Author image</label>
                    <input
                        type="text"
                        className="form-control rounded-pill border border-2 px-2"                        
                       name="authorimage"
                    />
                </div>
                <button className="btn btn-primary  rounded-pill ">Submit</button>
            </form>
            
        </>
    )
}
export default NewPost;