import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/products";

export const ProuductsContext = createContext([]);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const { isLoading, setIsLoading } = useState(true);

  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
      setIsLoading(false);
    })();
  }, []);

  return (
    <ProuductsContext.Provider value={products}>
      {isLoading ? null : children}
    </ProuductsContext.Provider>
  );
}
