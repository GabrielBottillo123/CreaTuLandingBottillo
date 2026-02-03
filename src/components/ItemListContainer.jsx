//Este componente se encarga de funciones principales como traer datos de la api
//usar hooks, filtrar productos por categoria usando useParams()


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]); //lo establecemos como vacio
  const { id } = useParams();

  useEffect(() => {
  //decidimos qué url usar segun si hay un id o no
  const url = id 
    ? `https://dummyjson.com/products/category/${id}` //url categoría específica
    : 'https://dummyjson.com/products?limit=100';    //url todos

  fetch(url)
    .then(res => res.json())
    .then(data => {
      //devuelve la lista en prop products
      setItems(data.products);
    })
    .catch(err => console.error("Error:", err));
}, [id]);
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-8 uppercase text-gray-800">
        {/*si hay un id, se mostrara como titulo principal el nombre de esa categoria*/}
        {id ? id : "Nuestros productos"}
      </h2>
      {/*mostramos la lista de producto*/}
      <ItemList items={items} />
    </div>
  );
};