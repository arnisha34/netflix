import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Container id="footer">
      <Row>
        <Col>
          <p>Questions? Call <a className="telephone" href="tel:1-844-505-2993">1-844-505-2993</a></p>
        </Col>
      </Row>
      <Row id="footer-links">
        <Col>
          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Redeem Gift Cards</li>
            <li>Buy Gift Cards</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
            <li>Do Not Sell or Share My Personal Information</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer