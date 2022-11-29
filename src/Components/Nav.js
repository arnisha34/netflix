import { useContext, useEffect, useState } from "react"
import { Row, Col, Button} from "react-bootstrap"
import { IoSearchSharp } from 'react-icons/io5'
import { BiBell } from 'react-icons/bi'
import { Link } from "react-router-dom"
import {Context} from "../Components/Context"
import $ from "jquery";

const Nav = () => {

  const [activeLink, setActiveLink] = useState("home")

  const ctx = useContext(Context);

  useEffect(() => {
    $('.search-input').css('display', 'none');
    $('.search-icon').css('right', 0);
    $('.search-icon').on('click',function(){
      $('.search-input').css({
        'display': 'block',
        'margin-right': "20px"
      })
      $('.search-icon').css({
        'right': "unset"
      })
    })

    $(window).on('scroll', function(){
      if($(document).scrollTop() > 20){
        $('.account-nav').css({
          'background-color': 'rgb(20, 20, 20)',
          '-webkit-transition': 'background-color 300ms linear',
          '-ms-transition': 'background-color 300ms linear',
          'transition': 'background-color 300ms linear'
        });
      }else{
        $('.account-nav').css({
          'background-color': 'initial',
          '-webkit-transition': 'background-color 300ms linear',
          '-ms-transition': 'background-color 300ms linear',
          'transition': 'background-color 300ms linear'
        })
      }
    })
  },[])

  const handleClick = (name) => {
    setActiveLink(name)
  }

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
      <Col lg={8}>
        <Link to="/browse"><img src="../images/netflix-logo.png" alt="Netflix" className="account-logo"/></Link>
        <div className="left-nav d-inline">
          <Link to="/browse" className={`navLink ${activeLink === "home" ? 'active' : ""}`} onClick={() => handleClick("home")}>Home</Link>
          <Link to="/tv-shows" className={`navLink ${activeLink === "tvShows" ? 'active' : ""}`} onClick={() => handleClick("tvShows")}>TV Shows</Link>
          <Link to="/movies" className={`navLink ${activeLink === "movies" ? 'active' : ""}`} onClick={() => handleClick("movies")}>Movies</Link>
          <Link className={`navLink ${activeLink === "new" ? 'active' : ""}`} onClick={() => handleClick("new")}>New & Popular</Link>
          <Link className={`navLink ${activeLink === "list" ? 'active' : ""}`} onClick={() => handleClick("list")}>My List</Link>
          <Link className={`navLink ${activeLink === "browse" ? 'active' : ""}`} onClick={() => handleClick("browse")}>Browse by Languages</Link>
        </div>
      </Col>
      <Col>
        <div className="right-nav d-flex align-items-center justify-content-end">
          <div className="search-container d-flex align-items-center position-relative">
            <IoSearchSharp className="search-icon ms-1 me-3 position-absolute" fill={'white'} size={25}/>
            <input className="search-input" placeholder="titles, people, genres"/>
          </div>
          <Link className="me-3">Kids</Link>
          <BiBell className="me-3" fill={'white'} size={25}/>
          <div className="account-dropdown text-white">
            account
          </div>
        </div>
      </Col>
    </Row> 
  )
}
export default Nav