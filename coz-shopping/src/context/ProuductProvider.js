import { createContext, useEffect, useState } from "react";
import { getProduct } from "../api/product";

export const ProuductContext = createContext([]);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const { isLoading, setIsLoading } = useState(true);

  useEffect(() => {
    (async () => {
      setProducts(await getProduct());
      setIsLoading(false);
    })();
  }, [setIsLoading]);

  return (
    <ProuductContext.Provider value={products}>
      {isLoading ? null : children}
    </ProuductContext.Provider>
  );
}
