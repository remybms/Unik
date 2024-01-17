import { CartProvider, useCart } from "react-use-cart";
import Header from "../../components/header"

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];

  return (
    <><Header />
    <div>
          {products.map((p) => (
              <div key={p.id}>
                  <button onClick={() => addItem(p)}>Add to cart</button>
              </div>
          ))}
      </div></>
  );
}



export default function App() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
}