import { useEffect, useState } from 'react';
import { gsap } from 'gsap'; // GSAP for animations
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button'; // For animated button
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapse/expand

  useEffect(() => {
    const tl = gsap.timeline({ paused: true }); // Create a paused timeline

    // Animate sidebar slide-in from left with a 3D rotation (adjust perspective and angle as needed)
    tl.from('.sidebar', {
      duration: 0.5,
      x: '-100%',
      ease: 'power3.inOut',
      transformPerspective: 400, // Adjust perspective for 3D effect
      rotateY: 10, // Rotate slightly on Y-axis for 3D effect
    });

    // Animate sidebar width based on collapsed state
    if (isCollapsed) {
      tl.to('.sidebar', { duration: 0.3, x: '-50%' }); // Slide to narrower width
    } else {
      tl.to('.sidebar', { duration: 0.3, x: '-1%' }); // Slide to full width
    }

    // Animate button slide-in on initial render (adjust as needed)
    tl.from('.animated-button', { duration: 0.3, x: 20, ease: 'power2.inOut' }); // Slide button from right

    // Play the timeline on state change or component mount
    tl.play(); // Play the animation on initial render
    return () => tl.kill(); // Clean up animations on unmount
  }, [isCollapsed]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed); // Function to toggle collapse state

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <ListGroup variant="flush"> {/* Use variant="flush" for seamless list items */}
        <ListGroupItem action href="#home">Home</ListGroupItem>
        <ListGroupItem action href="#about">About</ListGroupItem>
        <ListGroupItem action href="#settings">Settings</ListGroupItem>
      </ListGroup>

      {/* Add a toggle button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`}></i> {/* Toggle icon based on state */}
      </button>

      {/* Animated button */}
      <Button className="animated-button" variant="primary">
        Animated Button
      </Button>
    </div>
  );
};

export default Sidebar;
