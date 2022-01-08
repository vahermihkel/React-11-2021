import { useRef, useState } from 'react';

function ÜksToode() {
  const nimetusInputRef = useRef();
  const hindInputRef = useRef();
  const katInputRef = useRef();
  const piltInputRef = useRef();
  
  const tooteNimetus = window.location.href.split("muuda/")[1];
  const tooted = JSON.parse(localStorage.getItem("tooted"));
  const toodeIndex = tooted.findIndex(toodeMasiivist => 
    toodeMasiivist.nimetus.replace(" ","-").toLowerCase() === tooteNimetus);
  const toode = tooted[toodeIndex];
  const [toodeState, uuendanToode] = useState(toode);

  function saaKategooriad() {
    if (localStorage.getItem("kategooriad")) {
      return JSON.parse(localStorage.getItem("kategooriad"));
    } else {
      const kategooriad = ["coca", "water", "kali"];
      localStorage.setItem("kategooriad",JSON.stringify(kategooriad));
      return kategooriad;
    }
  }

  function muudaToode(event) {
    event.preventDefault(); // JavaScriptil on tavaline teguviis teha
    // -> vormisisestusele <- refresh. PreventDefault === VäldiTavapärast
    const uuendatudToode = {
      nimetus: nimetusInputRef.current.value,
      price: hindInputRef.current.value,
      kategooria: katInputRef.current.value,
      pilt: piltInputRef.current.value
    }
    tooted[toodeIndex] = uuendatudToode;
    localStorage.setItem("tooted", JSON.stringify(tooted));
    uuendanToode(uuendatudToode);
  }

  return (
  <div>
    <div className='center'>
      <div>Pealkiri: {toodeState.nimetus}</div>
      <div>Hind: {toodeState.price}</div>
      <div>Kategooria: {toodeState.kategooria}</div>
      {toodeState.pilt && <div><img className="item-image" src={toodeState.pilt} alt="" /><br/></div>}
    </div>
    <form onSubmit={muudaToode}>
      <label>Nimetus</label> <br/>
      <input ref={nimetusInputRef} defaultValue={toode.nimetus} type="text" /> <br/>
      <label>Hind</label> <br/>
      <input ref={hindInputRef} defaultValue={toode.price} type="number" /> <br/>
      <label>Kategooria</label> <br/>
      {/* <input ref={katInputRef} defaultValue={toode.kategooria} type="text" /> <br/> */}
      <select ref={katInputRef} defaultValue={toode.kategooria}>
        {saaKategooriad().map(kategooria => <option value={kategooria}>{kategooria}</option>)}
      </select>
      <br />
      <label>Pilt</label> <br/>
      <input ref={piltInputRef} defaultValue={toode.pilt} type="text" /> <br/>
      <button>Muuda</button> <br/>
    </form>
  </div>)
}

export default ÜksToode;