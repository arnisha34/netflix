import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {Context} from "./context"
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {

  const ctx = useContext(Context)

  return (
    <Container id="footer">
      {!ctx.loggedIn ?
      <>
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
      </> : 
      <>
      <Row className="footer-social-links">
        <Col className="d-flex align-items-center mb-3">
          <a href="#"><ImFacebook className="me-4" size={22} fill={'white'}/></a>
          <a href="#"><BsInstagram className="me-4" size={22} fill={'white'} stroke={'black'}/></a>
          <a href="#"><ImTwitter className="me-4" size={22} fill={'white'}/></a>
          <a href="#"><ImYoutube className="me-4" size={22} fill={'white'}/></a>
        </Col>
      </Row>
      <Row id="footer-links">
          <Col>
            <ul>
              <li>Audio Description</li>
              <li>Help Center</li>
              <li>Gift Cards</li>
              <li>Media Center</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Legal Notices</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </Col>
        </Row>
      </>
      }
    </Container>
  )
}

export default Footer