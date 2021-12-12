
                // omadused kaudu saan infot kätte mida mulle saadetakse
function ParcelMachines(omadused) {
  const muutuja = "pakiautomaadi väärtus";

  function valiAutomaat() {
    console.log("toimus nupu peal klikkimine");
  }

  return (
  <div>
    <br />
    <select>
      {omadused.automaadid
        .filter(üksEse => üksEse[omadused.filtreerimiseAlus] === omadused.väärtus)
        .map(üksEse =>
          <option>
            {üksEse.NAME}
          </option>
            )}
    </select>
    <br />
    <button onClick={valiAutomaat}>Vali automaat</button>
  </div>
  )
}

export default ParcelMachines;