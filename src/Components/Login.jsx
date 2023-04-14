import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { MyContext } from '../Context/MyContext.js';


function Login() {
    const [user, setUser] = useState("atuny0");
    const [password, setPassword] = useState("9uQFF1Lh");
    const {login, setLogin} = useContext(MyContext)
    const validateLogin = () => {
        const data=
        {
            username: user,
            password: password
        }
        fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((result) => result.json())
          .then((result) => {
            setLogin(
              {isLogin: true, user: result}
            )
          });
    }
    if (login?.isLogin) {
       return <Navigate to="/index" />;
    }
 
  return (
    <>
      <div className="container">
        <div className="row col-md-6">
          <div className="form-group ">
            <p className="form-label"> Usuario </p>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese usuario" 
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row col-md-6">
          <div className="form-group ">
            <p className="form-label"> Contraseña </p>
            <input
              className="form-control"
              type="password"
              placeholder="Ingrese contraseña"
              value={password}
              onChange={(e) =>{
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row col-md-4 mt-3">
          <button className="btn btn-primary" onClick={validateLogin}> Ingresar </button>
        </div>
      </div>
    </>
  );
}

export default Login