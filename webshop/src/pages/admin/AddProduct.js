import { useRef } from 'react';
import Form from 'react-bootstrap/Form';

function AddProduct() {
  const nameRef = useRef();
  const modelRef = useRef();
  const sizeRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const codeRef = useRef();

  function addToDatabase(event) {
    event.preventDefault();
    fetch("https://webshop11-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json",
      { 
        method: "POST", 
        body: JSON.stringify({
          name: nameRef.current.value,
          model: modelRef.current.value,
          size: sizeRef.current.value,
          image: imageRef.current.value,
          price: Number(priceRef.current.value),
          description: descriptionRef.current.value,
          code: codeRef.current.value
        })
      }
    );
  }

  return (
    <Form onSubmit={addToDatabase}>
      <Form.Label>Tootja</Form.Label> <br />
      <Form.Control ref={nameRef} required minLength={2} /> <br />
      <Form.Label>Mudel</Form.Label> <br />
      <Form.Control ref={modelRef} required /> <br />
      <Form.Label>Suurus</Form.Label> <br />
      <Form.Control ref={sizeRef} required /> <br />
      <Form.Label>Pilt</Form.Label> <br />
      <Form.Control ref={imageRef} /> <br />
      <Form.Label>Hind</Form.Label> <br />
      <Form.Control ref={priceRef} type="number" required /> <br />
      <Form.Label>Kirjeldus</Form.Label> <br />
      <Form.Control ref={descriptionRef} required /> <br />
      <Form.Label>Tootekood</Form.Label> <br />
      <Form.Control ref={codeRef} required minLength={8} maxLength={8} /> <br />
      <div className="form-button-wrapper">
        <button className='form-button'>Lisa andmebaasi</button>
      </div>
    </Form>)
}

export default AddProduct;