import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center" lg={7}>
            <h1 className="top-header">Unlimited movies, TV shows, and more.</h1>
            <h3 className="mt-3 mb-5">Watch anywhere. Cancel anytime.</h3>
            <h5 className="mb-4">Ready to watch? Enter your email to create or restart your membership.</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Get Started
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Hero