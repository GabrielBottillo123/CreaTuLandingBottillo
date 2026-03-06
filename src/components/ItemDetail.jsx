import Counter from './Counter'

export const ItemDetail = ({ item }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-50 flex flex-col md:flex-row min-h-[600px]">
      
      <div className="md:w-1/2 bg-[#f8f8f8] flex items-center justify-center p-12 lg:p-20 relative group">
        {item.discountPercentage && (
          <div className="absolute top-8 left-8 bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
            -{Math.round(item.discountPercentage)}%
          </div>
        )}
        
        <img 
          src={item.url} 
          alt={item.name} 
          className="w-full h-auto object-contain mix-blend-multiply transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
        <header className="mb-8">
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
            {item.category.replace('-', ' ')}
          </span>
          <h1 className="text-5xl font-black text-indigo-950 tracking-tighter leading-[1.1] mb-6">
            {item.name}
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-md">
            {item.description}
          </p>
        </header>

        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-4xl font-light text-indigo-950">${item.price}</span>
          <span className="text-xs text-gray-400 font-medium">IVA incluido / Envío gratis</span>
        </div>

        <div className="w-full h-[1px] bg-gray-100 mb-10"></div>

        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Seleccionar cantidad
            </span>
<Counter 
  stock={item.stock} 
  product={item}
/>          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-50 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {item.stock} unidades en stock listas para despacho
          </span>
        </footer>
      </div>
    </div>
  );
};