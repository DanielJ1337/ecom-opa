import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productValue = useProductProvider();
  return (
    <ProductContext.Provider value={productValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};

export const useProductProvider = () => {
  // const [productAmount, setProductAmount] = useState(0);

  const initialState = {
    name: "Fall Limited Edition Sneakers",
    amount: 0,
    total: 0,
  };
  // const [product, setProduct] = useState(initialState);

  const [product, setProduct] = useState(initialState);

  const increaseAmount = () => {
    setProduct({
      ...product,
      amount: product.amount + 1,
      total: product.total + product.amount * 125.0,
    });
  };

  const decreaseAmount = () => {
    if (product.amount <= 0) {
      setProduct({ ...product, amount: product.amount, total: product.total });
    } else {
      setProduct({
        ...product,
        amount: product.amount - 1,
        total: product.total - product.amount * 125.0,
      });
    }
  };

  return {
    product,
    increaseAmount,
    decreaseAmount,
  };
};
