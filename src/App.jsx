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
