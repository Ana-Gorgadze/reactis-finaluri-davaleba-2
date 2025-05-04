"use client";

import styles from "./AddToCart.module.css";

function AddToCart({product}) {

    const handleAddToCart = async () => {
        const result = await JSON.parse(localStorage.getItem('products'));
        if(result === null) {
            return localStorage.setItem('products', JSON.stringify([product]))
        }else{
            return localStorage.setItem('products', JSON.stringify([...result, product]))
        }
    }
    
    return (
        <button
            onClick={handleAddToCart}
            className={styles.btn}
        >
            add to cart
        </button>
    );
}

export default AddToCart;