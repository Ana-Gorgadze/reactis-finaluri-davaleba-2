import ProductItem from "@/components/ProductItem/ProductItem";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Products = async () => {
  let products;
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
  } catch (error) {
    throw Error(error);
  }

  return (
    <section>
      <Header />
      <div className={styles.conti}>
        <div className={styles.gr}></div>
        <h1 className={styles.title}>ALL SHOPS</h1>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className={styles.container}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/details/${product.id}`}>
            <ProductItem item={product} />
          </Link>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Products;
