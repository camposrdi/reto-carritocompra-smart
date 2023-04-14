import React, {useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Index from './Pages/Index.jsx';
import Login from './Components/Login.jsx';
import Content from './Components/Content.jsx';
import { MyContext } from './Context/MyContext.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Content>
        <Index />
      </Content>
    ),
  },

  {
    path: "/index",
    element: (
      <Content>
        <Index />
      </Content>
    ),
  },

  {
    path: "/login",
    element: (
      <Content>
        <Login />
      </Content>
    ),
  },
]);

const loginUser =  {
  isLogin: false, 
  user:{
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
}};

function App(){
  const [login, setLogin] = useState(loginUser);

  return (
  <>
    <MyContext.Provider value={{login, setLogin}}>
      <RouterProvider router={router} />
    </MyContext.Provider>
    
  </>
);
  }
export default App;
