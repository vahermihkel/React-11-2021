
function ÜksToode() {
  
  const tooteNimetus = window.location.href.split("toode/")[1];
  console.log(tooteNimetus);

  const tooted = JSON.parse(localStorage.getItem("tooted"));

  const toode = tooted.find(toodeMasiivist => 
    toodeMasiivist.nimetus.replace(" ","-").toLowerCase() === tooteNimetus);

  console.log(toode);

  return (
  <div>
    <div>{toode.nimetus}</div>
    <div>{toode.price}</div>
    <div>{toode.kategooria}</div>
    {toode.pilt && <div><img className="item-image" src={toode.pilt} alt="" /><br/></div>}
  </div>)
}

export default ÜksToode;