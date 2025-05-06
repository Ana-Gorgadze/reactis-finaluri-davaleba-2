"use client";

import styles from "./AddToCart.module.css";

function AddToCart({ product }) {
  const handleAddToCart = async () => {
    const result = await JSON.parse(localStorage.getItem("products"));
    if (result === null) {
      localStorage.setItem(
        "products",
        JSON.stringify([{ product: product, count: 1 }])
      );
    } else {
      const index = result.findIndex((item) => item.product.id === product.id);
    //   const index = result.findIndex((item) => console.log(item.product.id));

      if (index > -1) {
        result[index].count++;
      } else {
        result.push({ product: product, count: 1 });
      }

      localStorage.setItem("products", JSON.stringify([...result]));
    }
  };

  return (
    <button onClick={handleAddToCart} className={styles.btn}>
      add to cart
    </button>
  );
}

export default AddToCart;
