import { Counter } from './features/counter/Counter';
import './App.css';
//import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/loginpage';
import SignUpPage from './pages/signuppage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />

      </div>
  );
}

export default App;