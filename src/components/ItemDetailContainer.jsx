import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getItem } from "../firebase/db";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    getItem(id)
      .then((data) => {
        setItem(data);
      })
      .catch((err) => console.error("Error al obtener el producto:", err));
  }, [id]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex justify-center items-center">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p className="text-xl animate-pulse">Cargando detalles...</p>
      )}
    </div>
  );
};