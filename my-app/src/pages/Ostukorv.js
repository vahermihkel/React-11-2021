import { useState } from "react";

function Ostukorv() {
  const [ostukorviEsemed, uuendaOstukorv] = useState(saaOstukorviSisu());

  function saaOstukorviSisu() {
    if (sessionStorage.getItem("ostukorv")) {
      return JSON.parse(sessionStorage.getItem("ostukorv"));
    } else {
      return [];
    }
  }

  function kustutaOstukorvist(eseNimetus) {
    let tooted = JSON.parse(sessionStorage.getItem("ostukorv"));
    let j2rjekorraNumber = tooted.findIndex(toode => 
      toode.nimetus === eseNimetus);
    tooted.splice(j2rjekorraNumber,1);
    sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
    uuendaOstukorv(tooted);
  }

  function tyhjendaOstukorv() {
    console.log("tühjendab");
    // const tooted = [];
    // sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
    // uuendaOstukorv(tooted);
  }

  function arvutaKogusumma() {
    let tooted = JSON.parse(sessionStorage.getItem("ostukorv"));
    let kogusumma = 0;
    // .map -- asendab ära noole ees oleva sellega mis on funktsiooni sees
    // .find -- kontrollib vasakut ja paremat poolt kas on tõsi ja annab
    //    võrdusmärgi ette selle leitud toote kellele tuli "true"
    // .findIndex -- kontrollib vasakut ja paremat poolt kas on tõsi ja annab
    //    võrdusmärgi ette selle leitud toote järjekorranumbri kellele tuli "true"
    // .forEach -- paneb käima nii mitu korda selle funktsiooni sisu kui neid tooteid on
    tooted.forEach(toode => {
      kogusumma = kogusumma + toode.price;
    });
    return kogusumma;
  }

  // .map(ostukorviEse => <div>)    NIMETUS, PRICE, KATEGOORIA, PILT
  return(<div>
    <button onClick={tyhjendaOstukorv}>Tühjenda ostukorv</button>
    {ostukorviEsemed.map(ostukorviEse => <div>
      <span className="cart-item-name">{ostukorviEse.nimetus} </span>   
      <span className="cart-item-price">{ostukorviEse.price} </span>  
      <span className="cart-item-cat">{ostukorviEse.kategooria} </span> 
      <span className="cart-item-pic">{ostukorviEse.pilt} </span>  
      <button onClick={() => kustutaOstukorvist(ostukorviEse.nimetus)}>X</button>
  </div>)}
      <div>Kokku: {arvutaKogusumma()}</div>
  </div>)
}

export default Ostukorv;