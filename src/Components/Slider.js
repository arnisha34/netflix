import { Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import $ from 'jquery';
import { useEffect } from "react";


export const Slider = ({sliderTitle, sliderCategory}) => {

  const thumb_poster_path = "https://image.tmdb.org/t/p/w500/"

  useEffect(() => {
  
  }, [])
  

  return(
    <>
      <Row className="slider-title mb-3">
        <Col className="ps-5 text-white text-capitalize">
          <h3>{sliderTitle}</h3>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Swiper
          modules={[Navigation]}
          loop={true}
          navigation
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 4.5,
              slidesPerGroup: 4
            },
            1024: {
              slidesPerView: 5.5,
              slidesPerGroup: 5
            },
            1400: {
              slidesPerView: 6,
              slidesPerGroup: 6
            }
          }}
        >
            {sliderCategory.map((item) => {
              return(
                <SwiperSlide key={item.id} className={`swiper-${item.id}`}>
                  <img src={`${item.backdrop_path !== null ? thumb_poster_path + item.backdrop_path : "../images/netflix-placeholder.png"}`} alt={item.title} className="w-100"/>
                  <div className="mini-modal-container">
                    <div className="button-controls-container">
                      buttons here
                    </div>
                    <div className="metadata">
                      metadata here
                    </div>
                    <div className="tags">
                      {item.genres}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Col>
      </Row>
    </>
  )
}