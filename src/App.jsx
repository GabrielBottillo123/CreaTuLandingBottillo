//importamos componenetes
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContainer } from './components/CartContainer';
import {Checkout} from './components/Checkout';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryName" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<CartContainer />} />
       <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<h2 className="text-center mt-20 text-2xl font-bold">Aca no hay nada mostro</h2>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

