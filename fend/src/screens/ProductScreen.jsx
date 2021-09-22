import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Ratings from "../components/Ratings";
const ProductScreen = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
      //   console.log("UseEffect..");
      //   console.log(data);
    };
    fetchData();
  }, []);

  const data = product.find((a) => a.id === parseInt(props.match.params.id));

  // console.log(typeof(data.id));
  // console.log(typeof(parseInt(props.match.params.id)));
  if (!data) {
    return <h1> Product not found</h1>;
  } else {
    return (
      <div>
        <Link to="/">Back to Prouct</Link>

        <div className="row top">
          <div className="col-2">
            <img className="large" src={`../${data.image}`} alt={data.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{data.name}</h1>
              </li>
              <li>
                <Ratings rating={data.rating} numReviews={data.numReviews} />
              </li>
              <li>Price: &#8377;{data.price}</li>
              <li>Description: {data.descp}</li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">&#8377; {data.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div> 
                    <div>
                      {data.countOfStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="error">Not Available</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductScreen;
