import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menüü from './components/Menüü';
import Kodu from './pages/Kodu';
import Ostukorv from './pages/Ostukorv';

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
      </Routes>
      <div className="footer">FOOTER</div>
    </div>
  );
}

export default App;
