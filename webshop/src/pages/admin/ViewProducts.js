import { useState, useEffect } from 'react';
import AdminProduct from '../../components/AdminProduct';

function ViewProducts() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json")
      .then(res => {
        return res.json();
    }).then(data => {
      let productsFromDb = [];
      for (const key in data) {
        productsFromDb.push({id: key, productData: data[key]});
      }
      updateProducts(productsFromDb);
    })
    }, []
  )

  function deleteAllFromDb() {
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json",
      { 
        method: "PUT", 
        body: JSON.stringify([])
      }
    );
  }

  // GET - võtab (seda ei pea panema)
  // DELETE - kustutamine
  // POST - lisamine
  // PUT - asendamine

  return (
  <div>
    <button onClick={deleteAllFromDb}>Kustuta kõik tooted andmebaasist</button>
    {products.map(product => <AdminProduct key={product.id} product={product} />)}
    </div>)
}

export default ViewProducts;