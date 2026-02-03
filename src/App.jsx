//importamos componenetes
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
     {/*la ruta "/" por defecto-convencion */}
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} /> 
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      {/*si no encuentra nada en la url */}
      <Route path="*" element={<h2 className="text-center mt-20 text-2xl font-bold">Aca no hay nada mostro</h2>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

//