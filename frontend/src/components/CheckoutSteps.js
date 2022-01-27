import React from 'react'
import { Nav } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <Nav.Link as={Link} to='/login'>
            <Nav.Link> Sign In </Nav.Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled> Sign In </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Nav.Link as={Link} to='/shipping'>
            <Nav.Link> Shipping</Nav.Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled> Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Nav.Link as={Link} to='/payments'>
            <Nav.Link> Payment </Nav.Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled> Payment </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Nav.Link as={Link} to='/placeorder'>
            <Nav.Link> Place Order </Nav.Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Place Order </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
