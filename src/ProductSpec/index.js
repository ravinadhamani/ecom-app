import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";


function ProductSpec() {
  let navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  let params = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => {
        setProductDetails(res.data);
      });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        {" "}
        Product Specification
      </h1>
      <div id={styles.productSpec}>
        <img id={styles.productSpecImage} src={productDetails.thumbnail} alt={productDetails}/>
        <h2> {productDetails.title} </h2>
        <p> {productDetails.description} </p>
        <p>
          {" "}
          Brand : <b>{productDetails.brand} </b>{" "}
        </p>
        <p>
          {" "}
          Price : <b>{productDetails.price} $</b>{" "}
        </p>
        <p>
          {" "}
          Rating : <b> {productDetails.rating} / 5 </b>{" "}
        </p>
        <p>
          {" "}
          Stock : <b>{productDetails.stock} </b>{" "}
        </p>
        <p>
          {" "}
          category : <b>{productDetails.category} </b>{" "}
        </p>

        <button onClick={() => navigate(`/Cart`)}>ADD TO CART</button>
      </div>
    </>
  );
}

export default ProductSpec;
