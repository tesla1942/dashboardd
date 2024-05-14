/* import { useEffect } from 'react';
import { gsap } from 'gsap'; 
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "../components/Sales.css"

const Sales = ({ data, isProduct }) => {
  useEffect(() => {
    const tl = gsap.timeline(); 
    
    if (data && data.length > 0) {
      const cards = document.querySelectorAll(
        isProduct ? '.product-card' : '.sales-card'
      );

      tl.from(cards, {
        duration: 0.5, 
        y: 20, 
        opacity: 0, 
        ease: 'power3.inOut', 
        stagger: 0.1, 
      });
    }

    
    return () => tl.kill();
  }, [data, isProduct]); 

  return (
    <div className={isProduct ? 'products' : 'sales'}>
      <h1>{isProduct ? 'Products' : 'Sales'}</h1>
      <div className={isProduct ? 'product-list' : 'sales-list'}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <Card key={item.id} className={isProduct ? 'product-card' : 'sales-card'}>
              <Card.Body>
                {isProduct ? (
                  <>
                    <Card.Title>{item.name}</Card.Title>
               
                  </>
                ) : (
                  <>
                    <Card.Title>{item.product}</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroupItem>Sales: {item.sales}</ListGroupItem>
                      <ListGroupItem
                        className={item.growth >= 0 ? 'text-success' : 'text-danger'}
                      >
                        Growth: {item.growth}%
                      </ListGroupItem>
                    </ListGroup>
                  </>
                )}
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No {isProduct ? 'product' : 'sales'} data available.</p> 
        )}
      </div>
    </div>
  );
};

export default Sales;

 */