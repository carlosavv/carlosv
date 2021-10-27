import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #14453d;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: white;
    }
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">CV</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/projects" style={{ textDecoration: "none" }}>
                Projects
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
// function Navigation() {
//   return (
//     <>
//       <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav>
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="/about">About</Nav.Link>
//               <Nav.Link href="/contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Navigation;
