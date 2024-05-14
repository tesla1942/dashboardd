import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'; // Import Link for routing
import "../components/Navbar.css";
import { gsap } from "gsap"; // GSAP for animations

const MyNavbar = () => {
  useEffect(() => {
    // Create a GSAP timeline for animations (adjust as needed)
    const tl = gsap.timeline({ delay: 0.5 }); // Add a delay for smoother animation

    tl.from('.navbar-brand', { duration: 0.7, opacity: 0, y: -10, ease: "power3.inOut" })
      .from('.navbar-nav', { duration: 0.5, opacity: 0, y: -5, ease: "power2.inOut" }, "-=0.25"); // Animate nav items with a slight delay

    // Clean up animations on component unmount (optional)
    return () => tl.kill();
  }, []); // Empty dependency array ensures animation runs only once on mount

  return (
    <Navbar bg="light" expand="lg" className="animated"> {/* Add 'animated' class for animations */}
      <Container>
        <Navbar.Brand as={Link} to="/">React Bootstrap App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            {/* Add more dropdown menus or navigation links here */}
          </Nav>
          <Nav>
            {/* Add user profile dropdown, search bar, or other right-aligned elements here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
