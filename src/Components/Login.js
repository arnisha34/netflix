import { Col, Form, Row, Button } from "react-bootstrap"

const Login = () => {
  return (
    <Row className="login-container justify-content-center align-content-center">  
        <Col className="login mx-auto" lg={4}>
          <Form className="needs-validation" noValidate>
            <h2 className="mb-4">Sign in</h2>
            <Form.Group className="email mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email or phone number" />
              <div className="valid-feedback">Please enter a valid email or phone number.</div>
            </Form.Group>
            <Form.Group className="password mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="loginButton w-100" type="submit">Sign in</Button>
            <Form.Group className="mb-5 d-flex justify-content-between text-muted" controlId="formBasicCheckbox">
              <Form.Check className="remember" type="checkbox" label="Remember me" />
              <Form.Text>Need help?</Form.Text>
            </Form.Group>
            <div className="text-muted">
              <p>New to Netflix? <a href="#" className="text-white">Sign up now</a>.</p>
              <p className="google-disclaimer">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-primary">Learn more</span>.</p>
            </div>
          </Form>
        </Col>
      </Row>
  )
}

export default Login