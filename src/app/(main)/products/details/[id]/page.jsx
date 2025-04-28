"use client"

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

function ProductDetail({ params }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [params.id]);

    return (
        <section className={styles.container}>
            <img src={product?.image} alt={product?.title} width={200} height={200} />
            <div>
                <h2>{product?.title}</h2><br /><br />
                <p className={styles.p}>{product?.description}</p><br />
                <p className={styles.p}>rating: {product?.rating?.rate}/5</p>
                <p className={styles.p}>reviews: {product?.rating?.count}</p><br/>
                <p className={styles.price}>price: ${product?.price}</p>
            </div>
        </section>
    );
}

export default ProductDetail;

