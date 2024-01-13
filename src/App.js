import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/loginpage';
import SignUpPage from './pages/signuppage';
import CheckOut from './pages/CheckOut';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPageShop from './pages/CartPageShop';
import ProductDetailPage from './pages/ProductDetailPage';

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
  {
    path: "/cart",
    element: <CartPageShop></CartPageShop>,
  },
  {
    path: "/checkout",
    element: <CheckOut></CheckOut>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
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
