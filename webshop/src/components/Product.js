import { useTranslation } from 'react-i18next';

function Product(props) {
  const { t } = useTranslation();

  function addToCart() {
    console.log("äätab");
  }

  return (<div className="product">
    <div>{props.product.name} {props.product.model} ({props.product.size})</div>
    <div>{props.product.price}</div>
    <button onClick={addToCart}>{t("add-cart-button")}</button>
  </div>)
}

export default Product;