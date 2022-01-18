import { useState, useEffect } from 'react';
import Product from '../components/Product';

function Home() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
          // võtmiseks läheb aadressi vaja
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json")
      .then(res => {
        console.log(res);
        return res.json();
    }).then(data => {
      // console.log() --- "{-Mt9V2ZaY-iXunITYDHz: {name: "Apple"}, -Mt9V2ZaY-iXasdasdsDHas: {name: "Samsung"}}"
      let productsFromDb = [];
      // -Mt9V2ZaY-iXunITYDHz
      //  [].push({name: "Apple"})
      // -Mt9V2ZaY-iXasdasdsDHas
      //  [{name: "Apple"}].push({name: "Samsung"})
      //  [{name: "Apple"},{name: "Samsung"}]
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