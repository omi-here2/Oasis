// Import the functions you need from the SDKs you need
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Login from './Components/LoginSignup/Login';
import UserSignup from './Components/LoginSignup/UserSignup';
import Navbar from './Components/Navbar';
// import NewNavbar from './Components/newNavbar';
import LandingPage from './routes/landingPage'
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"",
        element: <LandingPage />
      },
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
        path: "signup/user",
        element: <UserSignup />
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <NewNavbar /> */}
    </div>
  );
}

export default App;
