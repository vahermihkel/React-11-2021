import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menüü from './components/Menüü';
import Admin from './pages/Admin';
import Kodu from './pages/Kodu';
import Ostukorv from './pages/Ostukorv';
import MuudaToode from './pages/MuudaToode';
import UusToode from './pages/UusToode';
import ÜksToode from './pages/ÜksToode';


// path -> mis järgneb localhost:3000 aadressile
// localhost:3000/  Kodu Component kasutusele
// localhost:3000/ostukorv    Ostukorv Component kasutusele

// Tehke nupp mine administraatori vaatesse
// 1. Admin <-
// 2. /administraator
// 3. "Mine administraatori lehele"

function App() {
  return (
    <div>
      <Menüü />
      <Routes>
        <Route path="/" exact element={<Kodu/>} />
        <Route path="/ostukorv" exact element={<Ostukorv/>} />
        <Route path="/lisa-toode" exact element={<UusToode/>} />
        <Route path="/admin" exact element={<Admin/>} />
        <Route path="/toode/:toodeNimetus" exact element={<ÜksToode/>} />
        <Route path="/muuda/:toodeNimetus" exact element={<MuudaToode/>} />
      </Routes>
      <div className="footer">FOOTER</div>
    </div>
  );
}

export default App;
