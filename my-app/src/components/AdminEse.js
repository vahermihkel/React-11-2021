import { Link } from "react-router-dom";

function AdminEse(props) {

  // handler = kutsume välja funktsiooni teises componendis
  function kustutaHandler(eseNimetus) {
    props.onKustuta(eseNimetus);
  }
  // kutsutakse vasakpoolse võtme alusel 
  // teises componendis parempoolne funktsioon

  return (
    <div className="admin-item">
      <span className="admin-item-name">{props.toodeComponenti.nimetus} </span>   
      <span className="admin-item-price">{props.toodeComponenti.price} </span>  
      <span className="admin-item-cat">{props.toodeComponenti.kategooria} </span> 
      <span className="admin-item-pic">{props.toodeComponenti.pilt} </span>  
      <Link to={`/muuda/${props.toodeComponenti.nimetus.replace(" ","-").toLowerCase()}`}>
        <button>Muuda toode</button>
      </Link>
      <button onClick={() => kustutaHandler(props.toodeComponenti.nimetus)}>X</button>
    </div>
    )
}

export default AdminEse;