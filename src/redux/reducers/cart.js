// initializez state-ul initial al reducer-ului
const initialState = {
    sneakers: [],
  };
  
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        // preiau produsul din action.payload
        const sneaker = action.payload;
        const newState = {
          ...state,
          sneakers: [...state.sneakers, sneaker],
        };
        return newState;
      case "DELET_CART":
        // preiau produsul din action.payload
        const sneakerDelet = action.payload;
        const newStateDelet = {
          ...state,
          sneakers: [],
        };
        return newStateDelet;
  
      default:
        return state;
    }
  }
  export default cartReducer;