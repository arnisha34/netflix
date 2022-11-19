import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { HiChevronRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <>
      <Row className="hero-container justify-content-center align-content-center">  
        <Col className="hero-content text-center" lg={5}>
          <h1 className="top-header">Unlimited movies, TV shows, and more.</h1>
          <h3 className="mt-3 mb-5">Watch anywhere. Cancel anytime.</h3>
          <h5 className="mb-4">Ready to watch? Enter your email to create or restart your membership.</h5>
          <InputGroup className="mb-3 signup">
            <Form.Control
              placeholder="Email address"
              aria-label="Email address"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" className="redButton">
              Get Started <HiChevronRight />
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </>
  )
}

export default Hero