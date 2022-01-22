import { useState, useEffect } from 'react';
import AdminProduct from '../../components/AdminProduct';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

function ViewProducts() {
  const [products, updateProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

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
    updateProducts([]);
    handleClose();
  }

  return (
  <div>
    <Button variant="danger" onClick={handleShow}>{t("delete-all-products-button")}</Button>
    {products.map(product => <AdminProduct key={product.id} product={product} />)}
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("modal.header")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("modal.body")}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("modal.cancel")}
          </Button>
          <Button variant="primary" onClick={deleteAllFromDb}>
            {t("modal.confirm")}
          </Button>
        </Modal.Footer>
      </Modal>

    </div>)
}

export default ViewProducts;


  // GET - võtab (seda ei pea panema)
  // DELETE - kustutamine
  // POST - lisamine
  // PUT - asendamine