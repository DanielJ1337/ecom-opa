import react, { createContext, useContext, useReducer } from "react";
import { initialState } from "../reducers/cartReducer";

import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();
const CartDispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

// export const CartProvider = ({ children }) => {
//   const cartValue = useCartProvider();
//   return (
//     <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   if (useContext(CartContext) === undefined) {
//     throw new Error("useCart must be used within CartContext");
//   }
//   return useContext(CartContext);
// };

// export const useCartProvider = () => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const increaseCounter = () => {
//     dispatch({
//       type: "INCREASE_AMOUNT",
//       payload: {
//         amount: +1,
//       },
//     });
//   };

//   const addToCart = (product) => {
//     const updatedCart = state.cart.concat(product);
//     updatePrice(updatedCart);

//     dispatch({
//       type: "ADD_TO_CART",
//       payload: {
//         cart: updatedCart,
//       },
//     });
// };

//   const removeFromCart = (product) => {
//     const updatedCart = state.cart.filter(
//       (currentProduct) => currentProduct.name !== product.name
//     );
//     updatePrice(updatedCart);
//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: {
//         cart: updatedCart,
//       },
//     });
//   };

//   const updatePrice = (products) => {
//     let total = 0;

//     products.forEach((product) => (total += product?.price));
//     dispatch({
//       type: "UPDATE_PRICE",
//       payload: {
//         total,
//       },
//     });
//   };
//   return {
//     state,
//     increaseCounter,
//     addToCart,
//     removeFromCart,
//     updatePrice,
//   };
// };
