import { Row, Col, Button} from "react-bootstrap"

const Nav = () => {
  return(
    <Row className="nav px-5 pt-4 align-items-center justify-content-between">
      <Col>
        <a href="#"><img src="../images/netflix-logo.png" alt="Netflix" className="logo"/></a>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button className="redButton">Sign in</Button>
      </Col>
    </Row>
  )
}
export default Nav