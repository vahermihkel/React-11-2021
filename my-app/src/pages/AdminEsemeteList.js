import { useState } from "react"; // useRef -- UusToode.js
import AdminEse from "../components/AdminEse";
import { Link } from "react-router-dom";

function AdminEsemeteList() {
  const [esemed, laeUuestiEsemed] = useState(saaEsemed());

  function saaEsemed() {
    if(JSON.parse(localStorage.getItem("tooted"))) {
      return JSON.parse(localStorage.getItem("tooted"));
    } else {
      return [];
    }
  }

                    // Kali

  // siin kustutatakse toode
  function kustutaToode(tooteNimetus) {
    let tooted = JSON.parse(localStorage.getItem("tooted"));
    let j2rjekorraNumber = tooted.findIndex(toode => 
      toode.nimetus === tooteNimetus);
    tooted.splice(j2rjekorraNumber,1);
    localStorage.setItem("tooted", JSON.stringify(tooted));
    laeUuestiEsemed(tooted);
  }

  return (<div>
    <Link to="/admin">
      <button>Tagasi</button>
    </Link>
    {esemed.map(toodeMassiivist => 
      <AdminEse 
        key={toodeMassiivist.nimetus} 
        toodeComponenti={toodeMassiivist} 
        onKustuta={kustutaToode} />
    )}
  </div>)
}

export default AdminEsemeteList;