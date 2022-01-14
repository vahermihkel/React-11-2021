
function AddProduct() {
  function addToDatabase() {
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json",
      { 
        method: "POST", 
        body: JSON.stringify({name: "Apple"})
      }
    );
  }

  return (<div><button onClick={addToDatabase}>Lisa andmebaasi</button></div>)
}

export default AddProduct;