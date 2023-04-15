import React, { useEffect, useState, useContext } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { MyContext } from '../Context/MyContext.js';


function DetalleProducto(props) {
     const { login } = useContext(MyContext);
  const { id } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((resp) => {
        setProducto(resp);
      });
  }, [id]);

  if (!login?.isLogin) {
    return <Navigate to="/login" />;
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,
    images,
  } = producto;

  return (
    <>
      <div>DetalleProducto</div>

      <h3>{title}</h3>
      <p> Descripción: {description} </p>
      <p> Precio: {price} </p>
      <p> Descuento por edad: {discountPercentage} </p>
      <p> Rating: {rating} </p>
      <p> Disponible: {stock} </p>
      <p> Marca: {brand} </p>
      <img src={thumbnail} style={{ width: 250 }} alt="" />

      {images &&
        images.map((e, i) => {
          return <img src={e} key={e} alt="" />;
        })}
    </>
  );
}

export default DetalleProducto