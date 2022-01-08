import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function Kategooria() {
  const kategooriaRef = useRef();
  const [kat, uuendaKategooriad] = useState(saaKategooriad());

  function saaKategooriad() {
    if (localStorage.getItem("kategooriad")) {
      return JSON.parse(localStorage.getItem("kategooriad"));
    } else {
      const kategooriad = ["coca", "water", "kali"];
      localStorage.setItem("kategooriad",JSON.stringify(kategooriad));
      return kategooriad;
    }
  }
  
  function sisestaKategooria(event) {
    event.preventDefault();
    console.log("tötöab");
    // saada kätte hooki küljest väärtuse
    console.log(kategooriaRef.current.value);
    if (localStorage.getItem("kategooriad")) {
      let kategooriad = JSON.parse(localStorage.getItem("kategooriad"));
      kategooriad.push(kategooriaRef.current.value);
      localStorage.setItem("kategooriad", JSON.stringify(kategooriad));
      uuendaKategooriad(kategooriad);
    } else {
      localStorage.setItem("kategooriad", JSON.stringify([kategooriaRef.current.value]));
      uuendaKategooriad([kategooriaRef.current.value]);
    }
  }
                        
  function kustutaKategooria(kategooria) {
    let kategooriad = JSON.parse(localStorage.getItem("kategooriad"));
    const järjekorranumber = kategooriad.indexOf(kategooria);
    kategooriad.splice(järjekorranumber, 1);
    localStorage.setItem("kategooriad", JSON.stringify(kategooriad));
    uuendaKategooriad(kategooriad);
  }

  return (<div>
    <Link to="/admin">
      <button>Tagasi</button>
    </Link>
    <form onSubmit={sisestaKategooria}>
      <label>Kategooria</label> <br />
      <input ref={kategooriaRef} /> <br />
      <button>Sisesta</button> <br />
    </form>
    {kat.map(kategooria => <div>
      <span>{kategooria} </span>
      <button onClick={() => kustutaKategooria(kategooria)}>kustuta</button> 
      </div>)}
    {/* <div>coca</div>
    <div>water</div>
    <div>kali</div> */}
  </div>)
}

export default Kategooria;