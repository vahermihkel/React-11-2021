import EsemeteList from "../components/EsemeteList";

// props teema

// map() et saaksin ise öelda 
// arvuga mitu korda tehakse

function Kodu() {
  function saaEsemed() {
    return [
      {nimetus: "Coca cola", price: 2, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/0/5000112614497.jpg"},
      {nimetus: "Fanta", price: 1.5, kategooria: "coca"},
      {nimetus: "Sprite", price: 2, kategooria: "coca"},
      {nimetus: "Vitamin well", price: 3, kategooria: "vesi", pilt: "https://www.vitaminwell.com/wp-content/uploads/2016/06/1466405668.jpg"},
      {nimetus: "Vichi", price: 2.5, kategooria: "vesi"},
      ];
  }

  function nupuvajutus() {
    console.log("väljalogimine brauseri konsooli");
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
  // https://www.w3schools.com/html/html_forms.asp

  // <form>
  // <label></label
  // <input />
  // </form>

  return(<div>
    <button onClick="nupuvajutus()">Järjesta A-Z</button>
    <button>Järjesta Z-A</button>
    <button>Järjesta hind kasvavalt</button>
    <button>Järjesta hind kahanevalt</button>
    <br/><br/>
    <button>Näita kodumaiseid</button>
    <button>Näita e-ainete vabu</button>
    <EsemeteList esemed={saaEsemed()} />
      
      
      {/* punast värvi pöörudb vastuvõtva Component poole (omadus)
        üksElement on ülemisest andmete kogumist 1 element ja pöördun tema väärtuse poole võtmega
      */}

    {/* <Ese nimetus="Coca cola" hind="2" kategooria="coca" pilt="https://www.selver.ee/img/800/800/resize/5/0/5000112614497.jpg"></Ese>
    <Ese nimetus="Fanta" hind="1.5" kategooria="coca"></Ese>
    <Ese nimetus="Sprite" hind="1.75" kategooria="coca"></Ese>
    <Ese nimetus="Sprite" hind="1.75" kategooria="coca"></Ese>
    <Ese nimetus="Vitamin well" hind="1" kategooria="vesi" pilt="https://www.vitaminwell.com/wp-content/uploads/2016/06/1466405668.jpg" />
    <Ese nimetus="Vichi" hind="1.2" kategooria="vesi" /> */}
  </div>);
}

export default Kodu;