import { Row, Col } from "react-bootstrap";

const RightContent = (props) => {
  return(
    <Row className="justify-content-center">
      <Col lg={5}>
        <img src={props.src} alt={props.alt}/>
      </Col>
      <Col lg={5}>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
      </Col>
    </Row>
  )
}

export default RightContent;