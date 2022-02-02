import React from 'react';
import "./Product.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
function Product({title,image,price,rating,}) {
  return <div className="product">
 <img src={image} />
       <div className="product_info">
           <p>{title}</p>
           <p className="product_price">
               <small>$</small>
               <strong>{price}</strong>
           </p>
          <div className="product_rating">
              {Array(rating)
              .fill()
              .map((_,i) =>(
                    <p className="star"><FavoriteIcon/></p>
              ))}
               <button id="one">Add to Cart</button>
</div>
</div>

            

            
  

</div>



  

}
export default Product;