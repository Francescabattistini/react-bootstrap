import { Navbar, Container, Nav } from 'react-bootstrap'

const CustomNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className='py-4'>
      <Container fluid>
        <Navbar.Brand href="#home">Books Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="#">About and Browse </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar