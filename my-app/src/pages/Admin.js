import { Link } from "react-router-dom";

function Admin() {
  

  return (<div>
    <Link to="/lisa-toode">
      <div className="my-text">Lisa uus toode</div>
    </Link>
    <Link to="/admin/tooted">
      <div className="my-text">Kustuta/muuda tooteid</div>
    </Link>
    <Link to="/admin/kategooria">
      <div className="my-text">Halda kategooriaid</div>
    </Link>
  </div>)
}

export default Admin;
