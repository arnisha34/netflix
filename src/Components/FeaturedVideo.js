import { Col, Row } from "react-bootstrap"
import { FaPlay } from 'react-icons/fa'
import { GrCircleInformation, GrVolumeMute } from 'react-icons/gr'
import { IoReload } from 'react-icons/io5'
import { ImVolumeHigh } from 'react-icons/im'

const FeaturedVideo = ({featureHeaderID, featureHeader}) => {

  const large_poster_path = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/"
  
  const small_poster_path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"

  const id = featureHeaderID;
  
  const filtered = featureHeader.filter(item => item.id === id);
    
  return (
    
    filtered.map(item => 
      <Row key={item.id} className="featured-container mb-5 position-relative">
        <div className="featured-bg-image px-0">
          <img src={`${large_poster_path}${item.poster_path}`} alt={item.title} />
        </div>
        <Col className="featured-info-container position-absolute px-5 text-white">
          <div className="featured-info">
            <h1 className="featured-title fw-bold">{!item.title ? item.name : item.title}</h1>
            <p className="my-lg-3 my-sm-2 featured-overview">{item.overview.substring(0,125) + "..."}</p>
            <div className="featuredButtons d-flex flex-row">
              <button className="playButton border-0 me-3 d-flex align-items-center justify-content-center" type="button"><FaPlay className="me-2"/><span>Play</span></button>
              <button className="infoButton border-0 d-flex align-items-center justify-content-center text-white" type="button"><GrCircleInformation className="me-2" stroke={"white"} size={24}/><span>More Info</span></button>
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