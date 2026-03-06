import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getItems } from '../firebase/db';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]); 
  const { categoryName } = useParams(); 

  useEffect(() => {
    getItems(categoryName, setProducts);
  }, [categoryName]); 

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-8 uppercase text-gray-800">
        {categoryName ? categoryName : "Nuestros productos"}
      </h2>
      <ItemList items={products} />
    </div>
  );
};