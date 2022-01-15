import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NavigationBar() {
  const { t, i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

  // EE, EN, RU
  // EST, ENG, RUS

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/"><img alt="" className="logo" src="/webshio.png"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/admin">{t("admin-link")}</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">{t("cart-link")}</Nav.Link>
        </Nav>
        <img alt="" onClick={() => changeLanguage("ee")} className="flag" src="/language-flags/estonia.png" />
        <img alt="" onClick={() => changeLanguage("en")} className="flag" src="/language-flags/united-kingdom.png" />
        <img alt="" onClick={() => changeLanguage("ru")} className="flag" src="/language-flags/russia.png" />
      </Container>
    </Navbar>
  )
}

export default NavigationBar;