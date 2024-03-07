import '../product-price/Price.css'

const Price = ({ price, discountPercentage }) => {

    const discountprice = (price - (price / 100 * discountPercentage)).toFixed(2);

    return (
        <>
        {discountPercentage === 0 ? 
            <p className="blackoffer">${price}</p>
        :    
             <p className="redoffer">${discountprice}</p>
            
        }
            {/* <p>${price}</p>
            <p>{discountprice}</p> */}
        </>
    )
};
export default Price;