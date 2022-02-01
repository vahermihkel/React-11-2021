import { useRef, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function SingleProduct() {

  const [products, updateProducts] = useState([]);
  const [productFound, updateProduct] = useState({});
  
  const productCode = window.location.href.split("toode/")[1];
  console.log(productCode);

  useEffect(() => {
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json")
      .then(res => {
        return res.json();
    }).then(data => {
      let productsFromDb = [];
      for (const key in data) {
        productsFromDb.push(data[key]);
      }
      updateProducts(productsFromDb);
      const product = productsFromDb.find(element => element.code === productCode);
      updateProduct(product);
    })
    }, []
  )

  return (
  <div className='center'>
    <div>Nimetus: {productFound.name} {productFound.model} {productFound.size}</div>
    <div>Hind: {productFound.price}</div>
    <div>Kirjeldus: {productFound.description}</div>
    {productFound.image && <div><img className="item-image" src={productFound.image} alt="" /><br/></div>}
  </div>)
}

export default SingleProduct;