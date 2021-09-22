import React from "react";
import Ratings from "./Ratings";

const Product = ({product}) => {
  return (
    <div  className="card">
      <a href={`/product/${product.id}`}>
        {/* 680 X 830 */}
        <img className="medium" src={product.image} alt="product" />
      </a>
      <div className="card-body">
        <a href={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </a>
      <Ratings rating={product.rating} numReviews={product.numReviews}/>
        <div className="price">&#8377; {product.price}</div>
      </div>
    </div>
  );
};

export default Product;
