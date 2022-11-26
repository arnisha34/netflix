import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import Context from "./Context"
import { FaPlay } from 'react-icons/fa'
import { GrCircleInformation, GrVolumeMute } from 'react-icons/gr'
import { IoReload } from 'react-icons/io5'
import { ImVolumeHigh } from 'react-icons/im'

const FeaturedVideo = () => {

  const ctx = useContext(Context)

  const id = 505642;

  const filtered = ctx.data.filter(item => item.id === id);
  
  console.log(filtered);

  
  return (
    
    filtered.map(item => 
      <Row key={item.id} className="featured-image h-100 position-relative">
          <div className="featured-bg-image position-absolute">
            <img src={`${ctx.large_poster_path}${item.poster_path}`} alt="placeholder" />
          </div>
        <Col className="featured-info-container d-flex flex-column justify-content-center px-5 text-white" lg={6}>
          <div className="featured-info">
            <h1 className="featured-title fw-bold">{item.title}</h1>
            <p>{item.overview}</p>
            <div className="featuredButtons d-flex flex-row">
              <button className="playButton border-0 me-3 d-flex align-items-center justify-content-center" type="button"><FaPlay className="me-2" size={22}/><span>Play</span></button>
              <button className="infoButton border-0 d-flex align-items-center justify-content-center text-white" type="button"><GrCircleInformation className="me-2" stroke={"white"} size={25}/><span>More Info</span></button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="featured-rating d-flex align-items-center position-absolute text-white">
            <ImVolumeHigh className="volume mb-3 me-3" size={40}/>
            <GrVolumeMute className="mute mb-3 me-3" size={40}/>
            <IoReload className="reload mb-3 me-3" size={40}/>
            <p className="text-uppercase">PG-13</p>
          </div>
        </Col>
      </Row>
    )
  )
}

export default FeaturedVideo