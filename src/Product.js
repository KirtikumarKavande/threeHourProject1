import React, { useState } from "react";
import Display from "./Display";
import TotalValue from "./TotalValue";

const Product = () => {
  const [id, setId] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [productName, setProductName] = useState();
  const [allInformation, setAllInformation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ID: id,
      SellingPrice: Number(sellingPrice),
      ProductName: productName,
    };
    setAllInformation([...allInformation, obj]);
       localStorage.setItem(obj.ID,JSON.stringify(obj));
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product ID</label>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label>Selling Price</label>
        <input
          onChange={(e) => {
            setSellingPrice(e.target.value);
          }}
        />
        <label>Product Name</label>
        <input
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <button type="submit">Add Product</button>
      </form>

    <Display allInformation={allInformation} setAllInformation={setAllInformation}/>
    <TotalValue allInformation={allInformation} />
    </div>
  );
};

export default Product;
