import { useState, useEffect } from 'react';
import Product from '../components/Product';

function Home() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json")
      .then(res => {
        return res.json();
    }).then(data => {
      // console.log() --- "-Mt9V2ZaY-iXunITYDHz: {name: "Apple"}"
      let productsFromDb = [];
      for (const key in data) {
        productsFromDb.push(data[key]);
      }
      console.log(productsFromDb);
      updateProducts(productsFromDb);
    })
    }, []
  )

  return (<div>{products.map(product => <Product key={product.code} product={product} />)}</div>)
}

export default Home;