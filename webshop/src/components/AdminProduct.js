import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';

function AdminProduct(props) {
  const { t } = useTranslation();

  function deleteProduct(id) {
    console.log(id);
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json/" + id,
      { 
        method: "DELETE", 
      }
    )
  }

  return (<div className="admin-product">
    <span>{props.product.productData.name} {props.product.productData.model} ({props.product.productData.size}) </span>
    <span>{props.product.productData.price} € </span>
    <span>{ props.product.productData.image && <img src={props.product.productData.image} alt="" />}</span>
   <span>
    <Button variant="warning">{t("edit-button")}</Button>
    <Button variant="danger" onClick={() => deleteProduct(props.product.id)}>X</Button>
   </span>
  </div>)
}

export default AdminProduct;