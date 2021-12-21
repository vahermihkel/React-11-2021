import { useState } from "react";

function Ostukorv() {
  const [ostukorviEsemed, uuendaOstukorv] = useState(saaOstukorviSisu());

  function saaOstukorviSisu() {
    if (sessionStorage.getItem("ostukorv")) {
      return JSON.parse(sessionStorage.getItem("ostukorv"));
    } else {
      sessionStorage.setItem("ostukorv",JSON.stringify([]))
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
    const tooted = [];
    sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
    uuendaOstukorv(tooted);
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

  function maksma() {
    fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }, 
        body: {
            "api_username": "92ddcfab96e34a5f",
            "account_name": "EUR3D1",
            "amount": 300.00,
            "order_reference": "asd213221",
            "nonce": "a9b7f7e79436za3112354a01b9902",
            "timestamp": "2021-12-21T19:30:15+02:00",
            "customer_url": "https://shop.example.com/cart"
          }
      }
    ).then(res => console.log(res))
  }

  // .map(ostukorviEse => <div>)    NIMETUS, PRICE, KATEGOORIA, PILT
  return(<div>
    {ostukorviEsemed.length>0 && <button onClick={tyhjendaOstukorv}>Tühjenda ostukorv</button>}
    {ostukorviEsemed.map(ostukorviEse => <div>
      <span className="cart-item-name">{ostukorviEse.nimetus} </span>   
      <span className="cart-item-price">{ostukorviEse.price} </span>  
      <span className="cart-item-cat">{ostukorviEse.kategooria} </span> 
      <span className="cart-item-pic">{ostukorviEse.pilt} </span>  
      <button onClick={() => kustutaOstukorvist(ostukorviEse.nimetus)}>X</button>
  </div>)}
      {ostukorviEsemed.length>0 && <div>Kogusumma: {arvutaKogusumma()} €</div>}
      {ostukorviEsemed.length>0 && <button onClick={maksma}>Maksma</button> }
      {ostukorviEsemed.length===0 && <div> <br />Ostukorv on tühi! <br /><br /></div> }
  </div>)
}
// maksma  console.log("alustan maksmist")

export default Ostukorv;