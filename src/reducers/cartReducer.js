export const initialState = {
  total: 0,
  amount: 0,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Payload Amount: ", payload);

      return {
        ...state,
        total: state.total + payload.total,
        amount: state.amount + payload.amount,
        cart: [...state.cart, payload],
      };
    default:
      throw new Error(`Unknown action ${action.type}`);

    case "REMOVE_FROM_CART":
      return {
        ...state,
      };
  }
};

export { cartReducer };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "ADD_TO_CART":
//       console.log("ADD_TO_CART", payload);
//       return {
//         ...state,
//         cart: [...state.cart, payload],
//       };

//     case "INCREASE_AMOUNT":
//       console.log("Increased Shoe Counter by 1");
//       return {
//         ...state,
//         amount: payload,
//       };
//     case "REMOVE_FROM_CART":
//       console.log("REMOVE_FROM_CART", payload);
//       return {
//         ...state,
//         cart: payload.cart,
//       };
//     case "UPDATE_PRICE":
//       console.log("UPDATE_PRICE", payload);
//       return {
//         ...state,
//         total: payload.total,
//       };
//     default:
//       throw new Error(`No case for type ${type} found in shop reducer`);
//   }
// };

// export default cartReducer;
