import logo from './logo.svg';
import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Register from './screens/Register';
import UserList from './screens/UserList';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './redux/reducers/rootReducer';
const store = configureStore(rootReducer) // This line is creating a store 

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
    {
    path: "/user-List",
    element: <div>About us!</div>,
  },
]);


function App() {
  return (
    <div className="App">
     {/* <About />
     <Contact /> */}
     {/* <Register /> */}
     {/* <UserList /> */}
     <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>

    </div>
  );
}

export default App;
