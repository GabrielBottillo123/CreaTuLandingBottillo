//muestra el detalle del producto individual al que entramos para "ver mas"

import Counter from './Counter'
export const ItemDetail = ({ item }) => {
  return (
    <div className="container mx-auto max-w-5xl p-6 md:p-12 bg-white shadow-2xl rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12">
      <img 
        src={item.thumbnail} 
        alt={item.title} 
        className="w-full object-cover rounded-2xl shadow-inner"
      />
      
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tight">{item.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-5xl font-black text-blue-600">${item.price}</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-500 uppercase">
            Categoría: {item.category}
          </span>
        </div>
        
       <div className="mt-10">
        <Counter /> 
      </div>
      </div>
    </div>
  );
};

//