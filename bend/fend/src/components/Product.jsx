import React from "react";
import {Link} from "react-router-dom";
import Ratings from "./Ratings";

const Product = ({product}) => {
  return (
    <div  className="card">
      {/* product id is set in the href attribute through mapping */}
      <Link to={`/product/${product._id}`}>
        {/* 680 X 830 */}
        <img className="medium" src={product.image} alt="product" />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
      <Ratings rating={product.rating} numReviews={product.numReviews}/>
        <div className="price">$ {product.price}</div>
      </div> 
    </div>
  );
};

export default Product;
