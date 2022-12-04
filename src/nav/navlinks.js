import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import $ from "jquery";


export const Navlinks = () => {

  const [activeLink, setActiveLink] = useState("")

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

  const links = [
    {
      text: "Home",
      path: "/browse"
    },
    {
      text: "TV Shows",
      path: "/browse/tv-shows"
    },
    {
      text: "Movies",
      path: "/browse/movies"
    },
    {
      text: "New & Popular",
      path: "/browse/latest"
    },
    {
      text: "My List",
      path: "/browse/my-list"
    },
    {
      text: "Browse by Languages",
      path: "/browse/original-audio"
    }
  ]

  const handleClick = (name) => {
    setActiveLink(name)
  }

  return (
    links.map(link => {
      return <Link key={link.text} to={link.path} className={`navLink ${activeLink === link.text ? 'active' : ""}`} onClick={() => handleClick(link.text)}>{link.text}</Link>
    })
  )
}