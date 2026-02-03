//este componente se encarga de mapear los productos y mostrarlos en una card individual
//recibe una prop llamada items. esta prop es el array de productos que viene desde ItemListContainer.jsx.

import Item from './Item';

const ItemList = ({ items }) => {
  return (
    //hacemos el estilo de una grilla, establecemos cuantos productos se muestran por fila
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 pb-20">
      {items.map((producto) => (
        //mapeamos los productos y establecemos como key su identificador unico, en este caso su ID
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;