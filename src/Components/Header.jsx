import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext.js'

function Header() {
    const { login } = useContext(MyContext);
  return (
    <>
      <div>Header</div>

      <h2>Usuario: {login?.user.firstName}</h2>
    </>
  );
}

export default Header