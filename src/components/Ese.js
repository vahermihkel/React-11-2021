
function Ese(omadused) {
  return (<div>
    <div>Pealkiri: {omadused.nimetus}</div>
    <div>Hind: {omadused.hind}</div>
    <div>Kategooria: {omadused.kategooria}</div>
    {omadused.pilt && <div><img className="item-image" src={omadused.pilt} alt="" /><br/></div>}
    <button>Lisa ostukorvi</button>
    <br /> <br></br>
  </div>)
}

export default Ese;