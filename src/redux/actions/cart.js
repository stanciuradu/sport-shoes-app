export function addToCart(sneaker) {
    return {
      type: "ADD_TO_CART",
      payload: sneaker,
    };
  }
  
  export function deletCart(sneaker) {
    return {
      type: "DELET_CART",
      payload: sneaker,
    };
  }