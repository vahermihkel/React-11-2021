import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (<div>
    <Link to="/admin/lisa-toode">
      <Button variant="info" className='admin-button'>Lisa uus toode</Button>
    </Link>
    <Link to="/admin/tooted">
      <Button variant="info" className='admin-button'>Halda tooteid</Button>
    </Link>
  </div>)
}

export default AdminHome;