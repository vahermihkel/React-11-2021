import Ese from "../components/Ese";

// props teema

// map() et saaksin ise öelda 
// arvuga mitu korda tehakse

function Kodu() {
  return(<div>
    <Ese siinAnnanKaasa></Ese>
    <Ese></Ese>
    <Ese></Ese>
    <Ese siinAnnanKaasa />
    <Ese />
  </div>);
}

export default Kodu;