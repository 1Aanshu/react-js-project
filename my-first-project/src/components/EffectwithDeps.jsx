import { useEffect, useState } from "react";

export const EffectwithDeps = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}`
      );
      const result = await response.json();
      const { products } = result;
      setProducts(products);
    };
    getProducts();
  }, [limit]);
  return (
    <>
      <input
        type="text"
        maxLength={3}
        name="limit"
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      {products.length > 0 ? (
        <ol>
          {products.map((product) => {
            return <li key={product?.id}>{product.title}</li>;
          })}
        </ol>
      ) : (
        <>No Products found!!!</>
      )}
    </>
  );
};
