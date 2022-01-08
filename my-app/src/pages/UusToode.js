import {useRef, useState} from 'react'; // impordin Reactis HOOKI nimega useRef
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

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

  // --------------------------------------
  const [toggleText, updateToggleText] = useState("Vali kategooria");
  // --------------------------------------

  function vormiSisestus(event) {
    event.preventDefault(); // seda peab tegema kui onSubmit kaudu funktsioon käima panna
    // let toodeInput = document.getElementById("toode").value;
    const toode = {
      nimetus: nimetusInputRef.current.value,
      price: hindInputRef.current.value,
      kategooria: kategooriaInputRef.current.value,
      pilt: piltInputRef.current.value
    }

    if (localStorage.getItem("tooted")) {
      const tootedStorageSeest = localStorage.getItem("tooted");
      const tootedMitteStringiKujul = JSON.parse(tootedStorageSeest);  
      tootedMitteStringiKujul.push(toode);
      localStorage.setItem("tooted", JSON.stringify(tootedMitteStringiKujul));
    } else {
      localStorage.setItem("tooted", JSON.stringify([toode]));
    }
  }

  function saaKategooriad() {
    if (localStorage.getItem("kategooriad")) {
      return JSON.parse(localStorage.getItem("kategooriad"));
    } else {
      const kategooriad = ["coca", "water", "kali"];
      localStorage.setItem("kategooriad",JSON.stringify(kategooriad));
      return kategooriad;
    }
  }

  // --------------------------------------
  function updateToggle(kategooria) {
    updateToggleText(kategooria);
  }
  // --------------------------------------

  return (
    <div>
      <Link to="/admin">
        <button>Tagasi</button>
      </Link>
      <div className='form'>
        <Form className='input-form'>
          <Form.Label>Nimetus</Form.Label> <br/>
          <Form.Control ref={nimetusInputRef} type="text" /> <br/>
          <Form.Label>Hind</Form.Label> <br/>
          <Form.Control ref={hindInputRef} step="0.01" type="number" /> <br/>
          <Form.Label>Kategooria</Form.Label> <br/>
          {/* <Form.Control ref={kategooriaInputRef} type="text" /> <br/> */}
          <Dropdown>
            <Dropdown.Toggle>
              {toggleText}
            </Dropdown.Toggle>
            <Dropdown.Menu ref={kategooriaInputRef} >
              {saaKategooriad().map(kategooria => 
                  <Dropdown.Item 
                    onClick={() => updateToggle(kategooria)} 
                    value={kategooria}>
                      {kategooria}
                  </Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <Form.Label>Pilt</Form.Label> <br/>
          <Form.Control ref={piltInputRef} type="text" /> <br/>
          <Button onClick={vormiSisestus}>Lisa ese</Button>
        </Form>
      </div>
    </div>)
}

export default UusToode;