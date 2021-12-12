import Ese from "./Ese";

function EsemeteList(omadused) {
  return (<div>
    {omadused.esemed.map(üksElement => ( 
        <Ese 
          key={üksElement.nimetus}
          nimetus={üksElement.nimetus} 
          hind={üksElement.price} 
          kategooria={üksElement.kategooria} 
          pilt={üksElement.pilt} 
          /> ))}
          {/* <Ese />
          <Ese />
          <Ese />
          <Ese />
          <Ese /> */}
  </div>)
}

export default EsemeteList;