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
