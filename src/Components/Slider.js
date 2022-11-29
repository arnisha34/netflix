import { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap"
import Glider from 'react-glider';
import {Context} from "./Context";

export const Slider = () => {

  const ctx = useContext(Context)

  useEffect(() => {
    document.querySelector('.glider-next').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'

    document.querySelector('.glider-prev').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>'
  })

  return(
    <>
      <Row className="slider-title position-relative mb-3">
        <Col className="ps-5 text-white text-capitalize">
          <h3>Latest Movies</h3>
        </Col>
      </Row>
      <Row className="slider-container">
        <Col className="ps-5">
          <Glider
            hasArrows
            rewind="true"
            slidesToShow={6.5}
            slidesToScroll={6}
          >
            {ctx.topRatedMovies.map((item, id) => {
              return(
                <div key={item.id} className={`slider-item slider-item-${item.id}`}><img src={`${ctx.large_poster_path}${item.backdrop_path}`} alt={item.title}/></div>
              )
            })}
          </Glider>
        </Col>
      </Row>
    </>
  )
}