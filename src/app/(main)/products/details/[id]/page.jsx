import styles from './page.module.css';
import AddToCart from '@/components/AddToCart/AddToCart';

const ProductDetail = async ({params}) => {
    const { id } = await params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    return (
        <section className={styles.container}>
            <img src={product?.image} alt={product?.title} width={200} height={200} />
            <div>
                <h2>{product?.title}</h2><br /><br />
                <p className={styles.p}>{product?.description}</p><br />
                <p className={styles.p}>rating: {product?.rating?.rate}/5</p>
                <p className={styles.p}>reviews: {product?.rating?.count}</p><br/>
                <nav>
                    <p className={styles.price}>price: ${product?.price}</p>
                    <AddToCart product={product}/>
                </nav>
            </div>
        </section>
    );
}

export default ProductDetail;

