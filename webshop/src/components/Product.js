import { useTranslation } from 'react-i18next';

function Product(props) {
  const { t } = useTranslation();

  // {name: "Apple"}
  function addToCart(product) {
    // vana: [{name: "Apple"},{name: "Apple"}]
    // uus: [{cartProduct: {name: "Apple"}, quantity: 2}]
    if (sessionStorage.getItem("cart")) {
      let cartProducts = JSON.parse(sessionStorage.getItem("cart"));
      // cartProducts.push(product);
      const productIndex = cartProducts.findIndex(cartProd => 
        // cartProd = product + quantity
        // cartProduct = product
        // cartProduct.code = 31231231
                                      // pealevajutatud producti code-ga  
         cartProd.cartProduct.code === product.code
        );
      console.log(productIndex);
      if (productIndex === -1) {
        cartProducts.push({cartProduct: product, quantity: 1}); // 1
      } else {
        cartProducts[productIndex].quantity++; // 2
      }
      sessionStorage.setItem("cart", JSON.stringify(cartProducts));
    } else {
      sessionStorage.setItem("cart", JSON.stringify([{cartProduct: product, quantity: 1}])); // 3
    }
  }

  return (<div className="product">
    <div>{props.product.name} {props.product.model} ({props.product.size})</div>
    <div>{props.product.price}</div>
    { props.product.image && <span>
        <img src={props.product.image} alt="" />
        <br />
      </span>}
    <button onClick={() => addToCart(props.product)}>{t("add-cart-button")}</button>
  </div>)
}

export default Product;