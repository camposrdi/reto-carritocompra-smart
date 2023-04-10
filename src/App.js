import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Index from './Pages/Index.jsx';
import Login from './Components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },

  {
    path: "/index",
    element: <Index />,
  },

  {
    path: "/login",
    element: <Login />,
  },

]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
