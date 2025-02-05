import { createSlice } from "@reduxjs/toolkit"; // Import Redux Toolkit's createSlice function

// Creates a slice of the Redux state for the counter feature
export const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: { value: 0 }, // Initial state of the counter
  
  // Reducer functions to modify the state
  reducers: {
    increment: (state) => { // Action to increase the counter
      state.value += 1;
    },
    decrement: (state) => { // Action to decrease the counter
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // Exports the actions

// Asynchronous action to increment the counter after a delay
export const incrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increment()); // Dispatches the increment action after 2 seconds
  }, 2000);
};

export default counterSlice.reducer; // Exports the reducer to be used in the store
