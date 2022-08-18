import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({title = 'title header'}) => {
    return <Navbar bg="white-transparent" expand="lg" className="p-3 fw-semibold sticky-top border-bottom border-warning">
    <Container>
      <Navbar.Brand href="#home" className="text-white">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
}

export default Header;