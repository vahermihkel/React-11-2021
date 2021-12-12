import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <div>
    <Link to="/">
      <button>Kõik automaadid</button>
    </Link>
    <Link to="/harju">
      <button>Harju maakond</button>
    </Link>
    <Link to="/viljandi">
      <button>Viljandi maakond</button>
    </Link>
    <Link to="/jogeva">
      <button>Jõgeva maakond</button>
    </Link>
    <Link to="/valismaa">
      <button>Välismaa pakiautomaadid</button>
    </Link>
  </div>)
}

export default Navbar;