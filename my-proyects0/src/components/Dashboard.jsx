import { useEffect } from 'react';
import { gsap } from "gsap"; // GSAP for animations
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Dashboard = () => {
  useEffect(() => {
    // Create a GSAP timeline for animations
    const tl = gsap.timeline();

    // Animate dashboard elements on component mount (adjust as needed)
    tl.from('.dashboard-title', { duration: 1, /* opacity: 0, */ y: 20, ease: "power3.inOut" })
      .from('.dashboard-content p', { duration: 0.5, /* opacity: 0, */ y: 10, ease: "power2.inOut" }, "-=0.25"); // Animate paragraphs with a delay

    // Clean up animations on component unmount (optional)
    return () => tl.kill();
  }, []); // Empty dependency array ensures animation runs only once on mount

  return (
    <div className="dashboard container"> {/* Apply Bootstrap classes */}
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-content"> {/* Wrap paragraphs in a container */}
        <p>This is the dashboard area.</p>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;


