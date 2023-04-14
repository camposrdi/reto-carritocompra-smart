import React, {useContext, useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import { MyContext } from '../Context/MyContext.js'

function Index() {
  const {login} = useContext(MyContext)
  const [productos, setProductos] = useState([])

  useEffect(() => {
   if(login?.isLogin){
     fetch("https://dummyjson.com/auth/products/category/home-decoration", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         Authorization: login?.user.token,
       },
     })
       .then((result) => result.json())
       .then((result) => {
         setProductos(result.products);
       });
   }
  }, [login]);

  if(!login?.isLogin){
    return <Navigate to = "/login" />
  };

  
  
  return (

    <>
    <h2> Lista de productos </h2>
 
  {
    productos.map((e) =>{
      return (
        <>
          <hr />
          <div key={e.id}>
            <h3>{e.title}</h3>
            <p> Descripción: {e.description} </p>
            <p> Precio: {e.price} </p>
            <p> Descuento por edad: {e.discountPercentage} </p>
            <p> Rating: {e.rating} </p>
            <p> Disponible: {e.stock} </p>
            <p> Marca: {e.brand} </p>
            <img src={e.thumbnail} style={{width:250}} alt="" />

          </div>
         
        </>
      );
    })
  }    

  </>
  )
}

export default Index