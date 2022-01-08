import EsemeteList from "../components/EsemeteList";
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
  const { t } = useTranslation();
  const [esemed, uuendaEsemed] = useState(saaEsemed());

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

  function sortNimetusKasv() {
    let tooted = saaEsemed();
    // tooted väärtuseks [{"nimetus":"Coca cola","price":"2","kategooria":"coca","pilt":"https://www.selver.ee/img/800/800/resize/5/0/5000112614497.jpg"},{"nimetus":"Fanta","price":"1.5","kategooria":"saab","pilt":""},{"nimetus":"Sprite","price":"2","kategooria":"coca","pilt":""},{"nimetus":"Vitamin well","price":3,"kategooria":"vesi","pilt":"https://www.vitaminwell.com/wp-content/uploads/2016/06/1466405668.jpg"},{"nimetus":"Vichi","price":2.5,"kategooria":"vesi"},{"nimetus":"","price":"","kategooria":"","pilt":""},{"nimetus":"321","price":"123","kategooria":"coca","pilt":"123"},{"nimetus":"321","price":"123","kategooria":"coca","pilt":"123"},{"nimetus":"","price":"","kategooria":"coca","pilt":""}]
    tooted.sort((a,b) => a.nimetus.localeCompare(b.nimetus));
    // ["f","g","t","s"].sort( (a,b) => a.localeCompare(b) );
    // ["f","g","t","s"].sort(("f","g")=> "f".localeCompare("g"))
    // ["f","g","t","s"].sort(("g","t")=> "g".localeCompare("t"))
    // ["f","g","t","s"].sort(("t","s")=> "t".localeCompare("s"))
    // ["f","g","s","t"]
    // ["f","g","s","a"]
    // [1,23,451,12,1,3,5]
    // 1,1,12,23,451,
    uuendaEsemed(tooted);
    // state uuendab HTMLi, mis saab uue väärtuse sulgude sees
    // (algväärtus on useState sulgude sees)
  }

  function sortNimetusKahan() {
    let tooted = saaEsemed();
    tooted.sort((a,b) => b.nimetus.localeCompare(a.nimetus));
    uuendaEsemed(tooted);
  }

  function sortHindKasv() {
    let tooted = saaEsemed();
    tooted.sort((a,b) => a.price - b.price);
    uuendaEsemed(tooted);
  }

  function sortHindKahan() {
    let tooted = saaEsemed();
    tooted.sort((a,b) => b.price - a.price);
    uuendaEsemed(tooted);
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
  // https://www.w3schools.com/html/html_forms.asp

  // <form>
  // <label></label
  // <input />
  // </form>

  return(<div>
    <Button variant="success" onClick={sortNimetusKasv}>{t('sort_asc')}</Button>
    <Button variant="success" onClick={sortNimetusKahan}>Järjesta Z-A</Button>
    <Button variant="success" onClick={sortHindKasv}>Järjesta hind kasvavalt</Button>
    <Button variant="success" onClick={sortHindKahan}>Järjesta hind kahanevalt</Button>
    <br/><br/>
    <Button variant="outline-primary">Näita kodumaiseid</Button>
    <Button variant="outline-primary">Näita e-ainete vabu</Button>
    <EsemeteList esemed={esemed} />
      
      
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