import { Link } from "react-router-dom";

function Menüü() {
  return (
  <div className="navbar">
  <Link to="/">
    <button className="main-button">Mine avalehele</button>
  </Link>
  <div className="my-text">adsadasdas</div>
  <div className="my-text">asdaeweqwe</div>
  <Link to="/ostukorv">
    <button className="main-button">Mine ostukorvi</button>
  </Link>   
</div>) 
}

export default Menüü;