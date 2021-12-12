import { useRef, useState } from 'react';

function ÜksToode() {
  const nimetusInputRef = useRef();
  const hindInputRef = useRef();
  const katInputRef = useRef();
  const piltInputRef = useRef();
  
  // window.location.href = http://localhost:3000/muuda/coca-cola
  // http://localhost:3000/muuda/coca-cola .split("o") -- ["http://l","calh","st:3000/muuda/c","ca-c","la"]
  // split("o")[3] --- "ca-c"
  const tooteNimetus = window.location.href.split("muuda/")[1];
  console.log(tooteNimetus);

  const tooted = JSON.parse(localStorage.getItem("tooted"));

  const toodeIndex = tooted.findIndex(toodeMasiivist => 
    toodeMasiivist.nimetus.replace(" ","-").toLowerCase() === tooteNimetus);

  const toode = tooted[toodeIndex];

  const [toodeState, uuendanToode] = useState(toode);

  console.log(toode);

  function muudaToode(event) {
    event.preventDefault(); // JavaScriptil on tavaline teguviis teha
    // -> vormisisestusele <- refresh. PreventDefault === VäldiTavapärast
    console.log("muuda nupule klikkimine töötab");
    console.log(nimetusInputRef.current.value);
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
      <input ref={katInputRef} defaultValue={toode.kategooria} type="text" /> <br/>
      <label>Pilt</label> <br/>
      <input ref={piltInputRef} defaultValue={toode.pilt} type="text" /> <br/>
      <button>Muuda</button> <br/>
    </form>
  </div>)
}

export default ÜksToode;