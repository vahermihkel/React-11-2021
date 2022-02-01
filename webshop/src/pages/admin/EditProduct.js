import { useRef, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

// splice() -- kustutamiseks
// split() -- Stringi tükeldamiseks "dasdaseqew23123".split("a") -- ["d","sd","seqew23123"];

function EditProduct() {
  const nameRef = useRef();
  const modelRef = useRef();
  const sizeRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const codeRef = useRef();

  const [products, updateProducts] = useState([]);
  const [productFound, updateProduct] = useState({});
  
  const productCode = window.location.href.split("muuda/")[1];
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

  console.log(productFound);

  function editProduct(event) {
    event.preventDefault();
    const changedProduct = {
      name: nameRef.current.value,
      model: modelRef.current.value,
      size: sizeRef.current.value,
      image: imageRef.current.value,
      price: Number(priceRef.current.value),
      description: descriptionRef.current.value,
      code: codeRef.current.value
    }
    const productIndex = products.findIndex(element => element.code === productCode);
    products[productIndex] = changedProduct;
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json",
      { 
        method: "PUT", 
        body: JSON.stringify(products)
      }
    );
    updateProduct(changedProduct);
  }

  return (
  <div>
    <div className='center'>
      <div>Nimetus: {productFound.name} {productFound.model} {productFound.size}</div>
      <div>Hind: {productFound.price}</div>
      <div>Kirjeldus: {productFound.description}</div>
      {productFound.image && <div><img className="item-image" src={productFound.image} alt="" /><br/></div>}
    </div>
    <Form onSubmit={editProduct}>
      <Form.Label>Tootja</Form.Label> <br />
      <Form.Control ref={nameRef} defaultValue={productFound.name} required minLength={2} /> <br />
      <Form.Label>Mudel</Form.Label> <br />
      <Form.Control ref={modelRef} defaultValue={productFound.model} required /> <br />
      <Form.Label>Suurus</Form.Label> <br />
      <Form.Control ref={sizeRef} defaultValue={productFound.size} required /> <br />
      <Form.Label>Pilt</Form.Label> <br />
      <Form.Control ref={imageRef} defaultValue={productFound.image} /> <br />
      <Form.Label>Hind</Form.Label> <br />
      <Form.Control ref={priceRef} defaultValue={productFound.price} type="number" required /> <br />
      <Form.Label>Kirjeldus</Form.Label> <br />
      <Form.Control ref={descriptionRef} defaultValue={productFound.description} required /> <br />
      <Form.Label>Tootekood</Form.Label> <br />
      <Form.Control ref={codeRef} defaultValue={productFound.code} required minLength={8} maxLength={8} /> <br />
      <div className="form-button-wrapper">
        <button className='form-button'>Lisa andmebaasi</button>
      </div>
    </Form>
  </div>)
}

export default EditProduct;