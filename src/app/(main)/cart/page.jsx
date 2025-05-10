"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from './page.module.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function page() {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromStorage = async () => {
    const products = await JSON.parse(localStorage.getItem("products"));
    setCartProducts(products);
  };
  
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

  const handleDelete = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id)

    products.splice(index, 1); 

    localStorage.setItem('products', JSON.stringify([...products]));
  }

  const service = 4.99;

  const totalPrice = cartProducts.reduce((acc, item) => {
    return (acc + item.product.price * item.count) + service;
  }, 0);



  return (
    <section>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.h1}>Shopping Cart</h1>
          <div className={styles.dodo}>
            <div className={styles.dididiv}>
              <div className={styles.titi}>
                <h4 className={styles.h41}>PRODUCT</h4>
                <h4 className={styles.h42}>QUANTUTY</h4>
                <h4 className={styles.h43}>PRICE</h4>
              </div>
              <div className={styles.products}>
                {cartProducts?.map((prod) => (
                  <div className={styles.product} key={prod.id}>
                    <div className={styles.div1}>
                      <Image className={styles.image} src={prod.product.image} alt="image" width={150} height={150}/>
                      <div className={styles.div2}>
                        <h3 className={styles.title}>{prod.product.title}</h3>
                        <p>{prod.product.price} $</p>
                      </div>
                    </div>
                    <div className={styles.quantuty}>
                      <button onClick={() => handleRemoveOne(prod.product)}>-</button>
                      <p>{prod.count}</p>
                      <button onClick={() => handleAddOne(prod.product)}>+</button>
                    </div>
                    <div className={styles.div3}>
                      <h2>{Math.ceil(prod.product.price * prod.count)} $</h2>
                      <button onClick={() => handleDelete(prod.product)}>🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.totaldiv}>
              <div className={styles.divi}>
                <div className={styles.divi1}>
                  <h3>Order Summary</h3>
                  <div>
                    <p>shepping</p>
                    <p style={{
                      color: 'green',
                    }}>free</p>
                  </div>
                  <div>
                    <p>Service</p>
                    <p>{service} $</p>
                  </div>
                </div>
                <div className={styles.divi2}>
                  <h3>Total:</h3> 
                  <h2>{Math.ceil(totalPrice)} $</h2>
                </div>
                <button className={styles.bttn}>Buy</button>
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </section>
  );
}

export default page;
