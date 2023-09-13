import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
    ],
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
