import Button from '../button/Button.jsx';
import Price from '../product-price/Price.jsx';
import Rating from '../product-ratio/Rating.jsx';

const Product = ({ value }) => {
    

    return (
        <div className="carts" >
            <div className="image">
                <img src={value.thumbnail} />
            </div>
            <div className= "info">
                <h6>{value.title}</h6>
                <Rating ratio={value.rating} />
                
                <p>{value.description}</p>
            </div>
            <div className="summ">
                {/* Kaina */}
                <Price price={value.price} discountPercentage={value.discountPercentage} />
                {/* Mygtuko komponentas */}
                <Button />
            </div>
        </div>
    )
}
export default Product;