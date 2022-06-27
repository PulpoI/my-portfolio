import { Container, Nav, Navbar } from "react-bootstrap";

import Header from "./Header";

function HeaderSmartphone() {
  return (
    <>
      <Navbar
        collapseOnSelect="false"
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="bottom"
      >
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Header />
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderSmartphone;
