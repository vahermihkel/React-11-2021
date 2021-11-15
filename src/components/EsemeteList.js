import Ese from "./Ese";

function EsemeteList(omadused) {
  return (<div>
    {omadused.esemed.map(üksElement => ( 
        <Ese 
          nimetus={üksElement.nimetus} 
          hind={üksElement.price} 
          kategooria={üksElement.kategooria} 
          pilt={üksElement.pilt} 
          /> ))}
  </div>)
}

export default EsemeteList;