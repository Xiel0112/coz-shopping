export const getProduct = (count) => {
  return fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=${count}`);
};
