import React, { useState } from 'react'


function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const validateLogin = () => {
        const data=
        {
            username: user,
            password: password
        }
        fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
          }, body: JSON.stringify(data)
        }).then(result => result.json())
        .then( result => console.log(result));
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