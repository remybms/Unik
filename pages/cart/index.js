// pages/index.js
import Head from 'next/head';
import Cart from '../../components/cart';
import Checkout from '../../components/checkout';
import Header from "../../components/header"

const Home = () => {
  const { addToCart, content } = Cart();
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 },
  ];

  return (
    <>
    <div>
      <Head>
        <title>UNIK sport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1>Welcome to my Commerce Site</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div>
        {content}
      </div>
      <Checkout />
    </div>
    </>
  );
};

export default Home;
