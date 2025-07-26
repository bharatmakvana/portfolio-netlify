import { useState } from "react";
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {assets} from '../assets/assets';

const NavBar = () => {
  const [expand, updateExpanded] = useState<boolean>(false);
  const [navBarColour, updateNavbar] = useState<boolean>(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navBarColour ? 'sticky': 'navbar'}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={assets.logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="site-navigation"
          onClick={() => {updateExpanded(expand ? false : true);}}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Navigation */}
        <Navbar.Collapse id="site-navigation">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                Resume
              </Nav.Link> 
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;