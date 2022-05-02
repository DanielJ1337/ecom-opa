import react, { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const product = useProductProvider();
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};

export const useProductProvider = () => {
  const [productAmount, setProductAmount] = useState(0);

  const increaseAmount = () => {
    setProductAmount((prevItem) => prevItem + 1);
  };

  const decreaseAmount = () => {
    if (productAmount <= 0) {
      return;
    } else {
      setProductAmount((prevItem) => prevItem - 1);
    }
  };

  return {
    productAmount,
    increaseAmount,
    decreaseAmount,
  };
};
