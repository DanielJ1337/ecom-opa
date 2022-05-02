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
  const [productAmount, setProductAmount] = useState(0);
  const [cartSize, setCartSize] = useState(0);

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

  const addToCart = () => {
    setCartSize(productAmount);
    console.log("cartsize was set to: ", cartSize);
    console.log("value of productAmount is: ", productAmount);
  };

  return {
    productAmount,
    cartSize,
    addToCart,
    increaseAmount,
    decreaseAmount,
  };
};
