import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import ViewProducts from './pages/admin/ViewProducts';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/ostukorv" exact element={<Cart/>} />
        <Route path="/toode/:id" exact element={<SingleProduct/>} />
        <Route path="/admin" exact element={<AdminHome/>} />
        <Route path="/admin/lisa-toode" exact element={<AddProduct/>} />
        <Route path="/admin/muuda/:id" exact element={<EditProduct/>} />
        <Route path="/admin/tooted" exact element={<ViewProducts/>} />
      </Routes>
    </div>
  );
}

export default App;
