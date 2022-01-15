import { useTranslation } from 'react-i18next';

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

  return (<div className="product">
    <div>{props.product.productData.name} {props.product.productData.model} ({props.product.productData.size})</div>
    <div>{props.product.productData.price}</div>
    <button onClick={() => deleteProduct(props.product.id)}>X</button>
  </div>)
}

export default AdminProduct;