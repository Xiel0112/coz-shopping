export const getProducts = () => {
  return fetch(`http://cozshopping.codestates-seb.link/api/v1/products`).then((res) => {
    return res.json();
  });
};
