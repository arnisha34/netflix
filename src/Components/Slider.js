import { useContext } from "react";
import { Row, Col } from "react-bootstrap"
import Glider from 'react-glider';
import {Context} from "./Context";

export const Slider = ({sliderTitle, sliderCategory}) => {

  const ctx = useContext(Context)

  return(
    <>
      <Row className="slider-title position-relative mb-3">
        <Col className="ps-5 text-white text-capitalize">
          <h3>{sliderTitle}</h3>
        </Col>
      </Row>
      <Row className="slider-wrapper mb-5">
        <Col className="slider-container d-flex ps-5">
          {/* <Glider
            hasArrows
            rewind="true"
            slidesToShow={6.5}
            slidesToScroll={6}
          > */}
            {sliderCategory.map((item) => {
              return(
                <div key={item.id} className={`slider-item slider-item-${item.id}`}>
                  <img src={`${item.backdrop_path !== null ? ctx.large_poster_path + item.backdrop_path : "../images/netflix-placeholder.png"}`} alt={item.title} />
                  <div className="mini-modal">
                    <p>mini modal goes here</p>
                  </div>
                </div>
              )
            })}
          {/* </Glider> */}
        </Col>
      </Row>
    </>
  )
}