import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Extrae el ID de la URL (ej: /item/5)

  useEffect(() => {
    // Pedimos a la API solo ese producto por su ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex justify-center items-center">
    {/*animacion copada de cargando...*/}
      {item ? <ItemDetail item={item} /> : <p className="text-xl">Cargando producto...</p>}
    </div>
  );
};