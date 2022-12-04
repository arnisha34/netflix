import { Row, Col } from "react-bootstrap";
import FAQ from "../components/faq";
import Hero from "../components/hero";

const Welcome = () => {
  return (
    <>
    <Hero />
      <Row className="sign-in-card">
        <Col>
          <Row className="left-card align-items-center justify-content-center mx-auto">
            <Col lg={6}>
              <h2 className="card-title-h2">Enjoy on your TV.</h2>
              <h3 className="card-title-h3">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
            </Col>
            <Col id="tv" lg={6}>
              <img src="../images/tv.png" alt="tv"/>
              <video autoPlay muted loop id="video-tv">
                <source src="../videos/video-tv.m4v" type="video/mp4"/>
              </video>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="sign-in-card">
        <Col>
          <Row className="right-card align-items-center flex-wrap-reverse justify-content-center mx-auto">
            <Col id="devices" lg={6}>
              <img src="../images/device-pile.png" alt="device"/>
              <video autoPlay muted loop id="video-devices">
                <source src="../videos/video-devices.m4v" type="video/mp4"/>
              </video>
            </Col>
            <Col lg={6}>
              <h2 className="card-title-h2">Watch everywhere.</h2>
              <h3 className="card-title-h3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="sign-in-card">
        <Col>
          <Row className="left-card align-items-center justify-content-center mx-auto">
              <Col>
                <h2 className="card-title-h2">Create profiles for kids.</h2>
                <h3 className="card-title-h3">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
              </Col>
              <Col id="kids-profiles" lg={6}>
                <img src="../images/kids_profiles.png" alt="kids profiles"/>
              </Col>
          </Row>
        </Col>
      </Row>
      <Row className="sign-in-card">
        <Col>
          <Row className="right-card align-items-center flex-wrap-reverse justify-content-center mx-auto">
            <Col id="download" lg={6}>
              <img src="../images/mobile.jpeg" alt="download"/>
              <div id="download-animation" className="position-absolute d-flex align-items-center">
                <div id="download-book" className="me-3">
                  <img src="../images/boxshot.png" alt="Stranger Things"/>
                </div>
                <div id="download-text">
                  <p className="text-1">Stranger Things</p>
                  <p className="text-2">Downloading...</p>
                </div>
                <div id="download-icon" className="ms-auto">
                  <img src="../images/download-icon.gif" alt="download icon"/>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="card-title-h2">Download your shows to watch offline.</h2>
              <h3 className="card-title-h3">Available on all plans except Basic with ads.</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <FAQ />
    </>

  )
}

export default Welcome