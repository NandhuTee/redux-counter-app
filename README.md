1. **What is Redux?**

Redux is a **state management library** that helps manage the state of an application in a predictable way. It is commonly used with React to handle complex state logic.

✅ **Global State Management**  
✅ **Predictable State Updates**  
✅ **Avoids Prop Drilling**  
✅ **Works with any UI framework**

2. **Core Concepts of Redux:**

- **Store:** A centralized place where all the application state is stored.
- **Actions:** Plain JavaScript objects that describe an event that has occurred in the app (e.g., a button click).
- **Reducers:** Functions that take the current state and an action and return a new state.
- **Dispatch:** The method to send actions to the store.
- **State:** The data that is stored and accessed globally in the app.

3. **How Redux works in a React app?**

- Connecting Redux with React components using the useSelector and useDispatch hooks.
- The flow of data in Redux.

4. **Setting up Redux in a React application:**

- Installing Redux and React-Redux.
- Creating actions and reducers.
- Connecting Redux with React components.

5. **Redux Thunk (for async actions):**

- Managing asynchronous data fetching and dispatching actions with Thunks.

1. **What is the difference between useSelector and useDispatch hooks?**

 **useSelector:** Used to **read** or **access state** from the Redux store. It subscribes to the store and returns the current state you want.

 **useDispatch:** Used to **dispatch actions** to the Redux store, triggering state updates by informing reducers.

## **Initialize Project**

npx create-react-app redux-counter-app

cd redux-counter-app

npm install @reduxjs/toolkit react-redux redux-thunk

**Main.jsx**
```jsx
import { StrictMode } from 'react' // Enables additional checks for potential issues in development
import { createRoot } from 'react-dom/client' // Creates a root to render the React application
import App from './App.jsx'; // Imports the main application component
import { Provider } from 'react-redux'; // Connects the Redux store with the React application
import store from './redux/store'; // Imports the Redux store

// Creates a root container and renders the App component inside React.StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Provides the Redux store to the React components */}
      <App /> {/* Renders the main App component */}
    </Provider>
  </StrictMode>,
);
```


**App.jsx**
```jsx
import { useSelector, useDispatch } from 'react-redux'; // Redux hooks to access state and dispatch actions
import { increment, decrement, incrementAsync } from "./Redux/counterSlice"; // Import Redux actions

function App() {
  const count = useSelector((state) => state.counter.value); // Retrieves the current counter value from the store
  const dispatch = useDispatch(); // Gets the dispatch function to send actions to the store

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Centers the UI */}
      <h1>Counter App using Redux</h1>
      <p>Count: {count}</p> {/* Displays the current counter value */}
      
      {/* Button to increase the counter by dispatching the increment action */}
      <button onClick={() => dispatch(increment())}>Increment</button> 
      
      {/* Button to decrease the counter by dispatching the decrement action */}
      <button onClick={() => dispatch(decrement())}>Decrement</button> 
      
      {/* Button to increment the counter asynchronously */}
      <button onClick={() => dispatch(incrementAsync(2))}>
        Increment by Async
      </button>
    </div>
  );
}

export default App; // Exports the App component
```

**store.jsx**
```jsx
import { configureStore } from '@reduxjs/toolkit'; // Import Redux Toolkit's store configuration function
import counterReducer from './counterSlice'; // Import the counter reducer

// Creates a Redux store with the counter reducer
const store = configureStore({
  reducer: {
    counter: counterReducer, // Adds the counter reducer to the store
  },
});

export default store; // Exports the store to be used in the application
```

**counterSlice.jsx**
```jsx
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
```

**1\. What does the useDispatch hook return?**

**Correct Answer:** The useDispatch hook returns the dispatch function, which is used to send actions to the Redux store to update the state.

**2\. How does dispatch work with Redux reducers?**

**Correct Answer:** Dispatch sends an action object to the store. The store then forwards this action to the reducer, which processes it and returns a new state.

- **Example:** If you dispatch { type: 'INCREMENT' }, the reducer will check for the matching case and update the state accordingly.

**3\. Can useDispatch be used outside a component? Why or why not?**

**Correct Answer:** No, useDispatch cannot be used outside a React component.

- **Reason:** Hooks (including useDispatch) must be used inside functional components or custom hooks. They rely on React’s lifecycle methods, which are not available outside components.

**4\. Why are action types usually defined as constants in real applications?**

**Correct Answer:**

- Defining action types as constants helps avoid bugs caused by typos in action type strings.
- It also makes the code more maintainable and easier to refactor.

**Example:**
```js
javascript


export const INCREMENT = 'INCREMENT';

export const DECREMENT = 'DECREMENT';

dispatch({ type: INCREMENT });
```


**Here’s a textual graph representation of Redux Data Flow:**





\[UI Component\]

                                    |

                                    v

\[Dispatch Action\]

                                    |

                                    v

\[Middleware (Optional)\]

                                    |

                                    v

\[Reducer\]

                                    |

                                    v

\[Store (New State)\]

                                    |

                                    v

\[UI Component Renders with Updated State\]

### Key Steps

1. **UI Component** dispatches an action based on user interaction.
2. **Action** flows to middleware if present (like redux-thunk or redux-saga).
3. **Reducer** receives the action and calculates the new state.
4. **Store** is updated with the new state.
5. **UI Component** re-renders with the updated state from the store.

## **Benefits of Redux**

✔ **Centralized State Management**  
✔ **Predictable State Changes**  
✔ **Easier Debugging & Testing**  
✔ **Efficient Performance with DevTools**

## **🔹 When to Use Redux?**

🔹 **When multiple components need access to the same state**  
🔹 **When passing state deeply through props becomes difficult**  
🔹 **When application state is complex** (e.g., authentication, cart, API data)