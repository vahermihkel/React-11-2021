import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

function Ese(omadused) {
  const { t } = useTranslation();

  function lisaOstukorvi() {
    const toode = {
      nimetus: omadused.nimetus,
      price: omadused.hind,
      kategooria: omadused.kategooria,
      pilt: omadused.pilt
    }
    console.log(toode);
    if (sessionStorage.getItem("ostukorv")) {
      const tootedOstukorvis = JSON.parse(sessionStorage.getItem("ostukorv"));
      tootedOstukorvis.push(toode);
      sessionStorage.setItem("ostukorv", JSON.stringify(tootedOstukorvis));
    } else {
      sessionStorage.setItem("ostukorv", JSON.stringify([toode]));
    }
    toast.success(t("added_to_cart"), {
      position: "bottom-right",
      theme: "dark"
      });
  }

  return (<div>
    <Link to={`toode/${omadused.nimetus.replace(" ","-").toLowerCase()}`}>
    <div>{t("product.title")}: {omadused.nimetus}</div>
    <div>{t("product.price")}: {omadused.hind}</div>
    <div>Kategooria: {omadused.kategooria}</div>
    {omadused.pilt && <div><img className="item-image" src={omadused.pilt} alt="" /><br/></div>}
    </Link>
    <button onClick={lisaOstukorvi}>Lisa ostukorvi</button>
    <br /> <br></br>
    <ToastContainer />
  </div>)
}

export default Ese;