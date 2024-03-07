import '../product-ratio/Rating.css';

const Rating = (value) => {

     const calculateWidth = (rating, width, max) => {
        return rating * width / max;
     }

    return (
        <>
            
            <div class="rating">
                <div class="gray-stars">
                        <i className ="bi bi-star-fill"></i>
                        <i className ="bi bi-star-fill"></i>
                        <i className ="bi bi-star-fill"></i>
                        <i className ="bi bi-star-fill"></i>
                        <i className ="bi bi-star-fill"></i>
                </div>
                <div class="yellow-stars" >
                    <div class="stars-container">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Rating;