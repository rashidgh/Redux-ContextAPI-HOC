let initialState = 0;
let counterReducer = (state = 0, a) => {
  switch (a.type) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    case "Reset":
      return (state = 0);

    default:
      return state;
  }
};
export default counterReducer;
