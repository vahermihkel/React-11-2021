import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Menüü() {
  const { t, i18n } = useTranslation();

  function eestiKeel() {
    localStorage.setItem("veebilehe_keel", "ee");
    i18n.changeLanguage('ee');
  }

  function ingliseKeel() {
    localStorage.setItem("veebilehe_keel", "en");
    i18n.changeLanguage('en');
  }

  return (
  <div className="navbar">
    <Link to="/">
      <button className="main-button">{t("home_link")}</button>
    </Link>
    <Link to="/admin">
      <div className="my-text">Mine administraatori lehele</div>
    </Link>
    <div className="my-text">
    { localStorage.getItem("veebilehe_keel")==="eesti" && <div>eesti_keelne_sõna</div> }
    { localStorage.getItem("veebilehe_keel")==="inglise" && <div>inglise_keelne_sõna</div> }
    </div>
    <Link to="/ostukorv">
      <button className="main-button">Mine ostukorvi</button>
    </Link>   
    <button onClick={eestiKeel} className="main-button">Eesti</button>
    <button onClick={ingliseKeel} className="main-button">Inglise</button>
  </div>) 
}

export default Menüü;