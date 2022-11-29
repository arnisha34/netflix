import { useContext } from "react";
import { Row, Col } from "react-bootstrap"
import Glider from 'react-glider';
import {Context} from "../Context";

export const OnTheAirTV = () => {

  const ctx = useContext(Context)

  return(
    <>
      <Row className="slider-title position-relative mb-3">
        <Col className="ps-5 text-white text-capitalize">
          <h3>On The Air</h3>
        </Col>
      </Row>
      <Row className="slider-container mb-5">
        <Col className="ps-5">
          <Glider
            hasArrows
            rewind="true"
            slidesToShow={6.5}
            slidesToScroll={6}
          >
            {ctx.otaTV.map((item) => {
              return(
                <div key={item.id} className={`slider-item slider-item-${item.id}`}><img src={`${item.backdrop_path !== null ? ctx.large_poster_path + item.backdrop_path : "../images/netflix-placeholder.png"}`} alt={item.title}/></div>
              )
            })}
          </Glider>
        </Col>
      </Row>
    </>
  )
}

export default OnTheAirTV