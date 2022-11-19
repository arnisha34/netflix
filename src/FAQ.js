import { Col, Row } from "react-bootstrap"
import { faqData } from "./FAQData"
import {GrAdd} from "react-icons/gr"
import { useState } from "react"

const FAQ = () => {

  const [active, setActive] = useState(false)
  const [toggle, setToggle] = useState([]);
  
  const selected = faqData.map(item => item.id);

  const handleClick = (id) => {
    setActive(!active);
    setToggle(selected.find(item => item === id));
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
              <ul className="faq-list">
                {faqData.map((item, id) => {
                  return(
                  <li key={item.id} className="faq-list-item">
                    <button className={`faq-question border-0 text-start position-relative ${active === true ? "active" : ""}`} onClick={() => handleClick(id)}>{item.question} <GrAdd className="plus-icon position-absolute"/></button>
                    <div className={`faq-answer ${toggle === id && !active ? "open" : "closed"}`}>{item.answer}</div>
                  </li>
                  )})}

              </ul>
            </Col>
          </Row>
      </Col>
    </Row>
  )
}

export default FAQ