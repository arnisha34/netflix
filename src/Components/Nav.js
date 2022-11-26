import { useContext } from "react"
import { Row, Col, Button} from "react-bootstrap"
import { IoSearchSharp } from 'react-icons/io5'
import { BiBell } from 'react-icons/bi'
import { Link } from "react-router-dom"
import Context from "../Components/Context"

const Nav = () => {

  const ctx = useContext(Context);

  return(
    !ctx.loggedIn ?
    <Row className="welcome-nav px-5 pt-4 align-items-center justify-content-between">
      <Col>
        <Link to="/"><img src="../images/netflix-logo.png" alt="Netflix" className="welcome-logo"/></Link>
      </Col>
      <Col className="d-flex justify-content-end">
        <Link to="login"><Button className="redButton">Sign in</Button></Link>
      </Col>
    </Row> :
    <Row className="account-nav px-5 align-items-center position-fixed">
      <Col lg={10}>
        <Link to="/"><img src="../images/netflix-logo.png" alt="Netflix" className="account-logo"/></Link>
        <div className="left-nav d-inline">
          <Link>Home</Link>
          <Link>TV Shows</Link>
          <Link>Movies</Link>
          <Link>New & Popular</Link>
          <Link>My List</Link>
          <Link>Browse by Languages</Link>
        </div>
      </Col>
      <Col>
        <div className="right-nav d-flex align-items-center justify-content-evenly">
          <IoSearchSharp fill={'white'} size={25}/>
          <Link>Kids</Link>
          <BiBell fill={'white'} size={25}/>
          <div className="account-dropdown text-white">
            account
          </div>
        </div>
      </Col>
    </Row> 
  )
}
export default Nav