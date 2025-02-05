import { configureStore } from '@reduxjs/toolkit'; // Import Redux Toolkit's store configuration function
import counterReducer from './counterSlice'; // Import the counter reducer

// Creates a Redux store with the counter reducer
const store = configureStore({
  reducer: {
    counter: counterReducer, // Adds the counter reducer to the store
  },
});

export default store; // Exports the store to be used in the application
