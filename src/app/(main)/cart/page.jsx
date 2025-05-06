"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function page() {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromStorage = async () => {
    const products = await JSON.parse(localStorage.getItem("products"));
    setCartProducts(products);
  };
  
  console.log(cartProducts);
  
  useEffect(() => {
    getProductsFromStorage();
  }, [cartProducts]);

  const handleAddOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id)
    products[index].count++;

    localStorage.setItem('products', JSON.stringify([...products]))
  }

  const handleRemoveOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id)

    if (index !== -1) {
      products[index].count--;
  
      if (products[index].count <= 0) {
        products.splice(index, 1); 
      }
  
      localStorage.setItem('products', JSON.stringify([...products]));
    }
  }

  return (
    <div>
      {cartProducts?.map((prod) => (
        <div key={prod.id}>
          <Image src={prod.product.image} alt="image" width={200} height={200}/>
          <h1>{prod.product.title}</h1>
          <p>{prod.product.description}</p>
          <div>
            <button onClick={() => handleAddOne(prod.product)}>+</button>
            <p>{prod.count}</p>
            <button onClick={() => handleRemoveOne(prod.product)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
