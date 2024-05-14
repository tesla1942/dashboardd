/* import  { useEffect } from 'react';
import { gsap } from 'gsap'; // GSAP for animations
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const Products = ({ productData }) => {
  useEffect(() => {
    const tl = gsap.timeline(); // Create a GSAP timeline
  
    // Animate product cards with ListGroupItem content
    if (productData && productData.length > 0) {
      const productCards = document.querySelectorAll('.product-card');
      const cardsWithContent = Array.from(productCards).filter((card) =>
        card.querySelectorAll('.list-group-item').length > 0 // Check for ListGroupItem elements
      );
  
      if (cardsWithContent.length > 0) {
        tl.from(cardsWithContent, {
          duration: 0.5,
          y: 20, // Initial position: 20px down
          opacity: 0, // Initially invisible
          ease: 'power3.inOut',
          stagger: 0.1, // Stagger animation for each card (0.1s delay between)
        });
      }
    }
  
    // Cleanup animations on unmount
    return () => tl.kill();
  }, [productData]);
  
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-list">
        {productData && productData.length > 0 ? (
          productData.map((item) => (
            <Card key={item.id} className="product-card">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <ListGroup variant="flush">
                  {item.details && item.details.length > 0 ? ( // Assuming product details array
                    item.details.map((detail) => (
                      <ListGroupItem key={detail.id} className="animate-on-render"> {/* Add animation class */}
       /*                  {detail.content}
                      </ListGroupItem>
                    ))
                  ) : (
                    <p>No product details available.</p>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No product data available.</p> 
        )}
      </div>
    </div>
)};
   */ 