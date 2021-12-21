import EsemeteList from "../components/EsemeteList";
import Button from 'react-bootstrap/Button';

// props teema

// map() et saaksin ise öelda 
// arvuga mitu korda tehakse

// 1. ANDMEBAAS - päriselus lähevad siia, tooted, kasutajad, tellimused, vastused
// 2. LOCALSTORAGE - päriselus: veebilehe keel, veebilehe seaded kas tahad midagi näha, kui paned cookie kinni
// 3. MINGI FAIL - me ei tee

// [
//   {nimetus: "Coca cola", price: 2, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/0/5000112614497.jpg"},
//   {nimetus: "Fanta", price: 1.5, kategooria: "coca"},
//   {nimetus: "Sprite", price: 2, kategooria: "coca"},
//   {nimetus: "Vitamin well", price: 3, kategooria: "vesi", pilt: "https://www.vitaminwell.com/wp-content/uploads/2016/06/1466405668.jpg"},
//   {nimetus: "Vichi", price: 2.5, kategooria: "vesi"},
//   ]

function Kodu() {
  function saaEsemed() {
    if(JSON.parse(localStorage.getItem("tooted"))) {
      return JSON.parse(localStorage.getItem("tooted"));
    } else {
      let tooted = [
        {nimetus: "Coca cola", price: 2, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/0/5000112614497.jpg"},
        {nimetus: "Fanta", price: 1.5, kategooria: "coca"},
        {nimetus: "Sprite", price: 2, kategooria: "coca"},
        {nimetus: "Vitamin well", price: 3, kategooria: "vesi", pilt: "https://www.vitaminwell.com/wp-content/uploads/2016/06/1466405668.jpg"},
        {nimetus: "Vichi", price: 2.5, kategooria: "vesi"},
      ];
      localStorage.setItem("tooted", JSON.stringify(tooted));
      return tooted;
    }
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
    <Button variant="success" onClick={nupuvajutus}>Järjesta A-Z</Button>
    <Button variant="success">Järjesta Z-A</Button>
    <Button variant="success">Järjesta hind kasvavalt</Button>
    <Button variant="success">Järjesta hind kahanevalt</Button>
    <br/><br/>
    <Button variant="outline-primary">Näita kodumaiseid</Button>
    <Button variant="outline-primary">Näita e-ainete vabu</Button>
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