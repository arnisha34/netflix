import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { faqData } from "../FAQData"
import {GrAdd} from "react-icons/gr"
import { useState } from "react"
import { HiChevronRight } from 'react-icons/hi'


const FAQ = () => {

  const [active, setActive] = useState([])
  const [toggle, setToggle] = useState(false);
  
  const selected = faqData.map(item => item.id);
  

  const handleClick = (id) => {
    setToggle(!toggle);
    setActive(selected.find(item => item === id));
  }

  return(
    <Row className="sign-in-card faq">
      <Col>
          <Row className="mb-5">
            <Col>
                <h2 className="card-title-h2 text-center">Frequently Asked Questions</h2>
            </Col>
          </Row>
          <Row className="faq-container mx-auto">
            <Col>
              <ul className="faq-list mb-5">
                {faqData.map((item, id) => {
                  return(
                  <li key={item.id} className="faq-list-item">
                    <button className="faq-question border-0 text-start position-relative" onClick={(e) => handleClick(id)}>{item.question} <GrAdd className={`plus-icon position-absolute ${active === id ? "open" : ""}`}/></button>
                    <div className={`faq-answer ${active === id ? "open" : ""}`}>
                      <span>{item.answer}</span>
                    </div>
                  </li>
                  )})}
              </ul>
            </Col>
          </Row>
          <Row className="hero-content mx-auto">
            <Col>
              <h5 className="mb-4 text-center">Ready to watch? Enter your email to create or restart your membership.</h5>
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
      </Col>
    </Row>
  )
}

export default FAQ