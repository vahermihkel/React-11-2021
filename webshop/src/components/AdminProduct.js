import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminProduct(props) {
  const { t } = useTranslation();

  function deleteProduct(id) {
    props.onDelete(id);
  }

  return (<div className="admin-product">
    <span>{props.product.name} {props.product.model} ({props.product.size}) </span>
    <span>{props.product.price} € </span>
    <span>{ props.product.image && <img src={props.product.image} alt="" />}</span>
   <span>
    <Link to={`/admin/muuda/${props.product.code}`}>
      <Button variant="warning">{t("edit-button")}</Button>
    </Link>
    <Button variant="danger" onClick={() => deleteProduct(props.product.code)}>X</Button>
   </span>
  </div>)
}

export default AdminProduct;