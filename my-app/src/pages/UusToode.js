import {useRef} from 'react'; // impordin Reactis HOOKI nimega useRef
// document.getElementById("mingi-id").value
// mingiVäärtusRef.current.value

// document.getElementById läheb uuesti otsima
// ref seob automaatselt ennast selle input kohaga

// ID võib kogemata korduda
// ref on ühe componendi põhine alati

function UusToode() {
  const nimetusInputRef = useRef(); // võtan HOOKI kasutusele, pannes ta
          // väärtuse sisse muutujasse
          // const on nagu let, ainult ma ei saa talle teist korda väärtust anda
          // ! täpselt selle nimetusega pean kirjutama HTMLi kuidas ma ta kasutusele võtan
          // võtan kasutusele ref={NIMETUS}
  const hindInputRef = useRef();
  const kategooriaInputRef = useRef();
  const piltInputRef = useRef();

  function vormiSisestus(event) {
    event.preventDefault(); // seda peab tegema kui onSubmit kaudu funktsioon käima panna
    // let toodeInput = document.getElementById("toode").value;
    // console.log(toodeInput);
    console.log(nimetusInputRef.current.value); // ref.current.value
            // ref.current === document.getElementById("toode")
    console.log(hindInputRef.current.value);
    console.log(kategooriaInputRef.current.value);
    console.log(piltInputRef.current.value);
    console.log("vormi sisestus töötab");
    const toode = {
      nimetus: nimetusInputRef.current.value,
      price: hindInputRef.current.value,
      kategooria: kategooriaInputRef.current.value,
      pilt: piltInputRef.current.value
    }

    if (localStorage.getItem("tooted")) {
      // // console.log("on selline võti");
      const tootedStorageSeest = localStorage.getItem("tooted");
      const tootedMitteStringiKujul = JSON.parse(tootedStorageSeest);    
      // // console.log(typeof tootedStorageSeest);
      // // console.log(typeof tootedMitteStringiKujul);
      tootedMitteStringiKujul.push(toode);
      // localStorage.setItem("tooted", JSON.stringify(tootedMitteStringiKujul));
      localStorage.setItem("tooted", JSON.stringify(tootedMitteStringiKujul));
    } else {
      // console.log("ei ole sellist võtit");
      localStorage.setItem("tooted", JSON.stringify([toode]));
    }
  }

  return (
  <form onSubmit={vormiSisestus}>
    <label>Nimetus</label> <br/>
    <input ref={nimetusInputRef} type="text" /> <br/>
    <label>Hind</label> <br/>
    <input ref={hindInputRef} step="0.01" type="number" /> <br/>
    <label>Kategooria</label> <br/>
    <input ref={kategooriaInputRef} type="text" /> <br/>
    <label>Pilt</label> <br/>
    <input ref={piltInputRef} type="text" /> <br/>
    <button>Lisa ese</button>
  </form>)
}

export default UusToode;