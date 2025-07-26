import { Container, Row, Col } from "react-bootstrap";
import {assets} from '../assets/assets';
import Type from "./Type";
import Intro from "./Intro";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
  return (
    <>
      <section className='home-section content-section' id="home">
        <Container>
          <Row className='align-items-md-center'>
            <Col md={7}>
              <div className='home-section__content'>
                <h1>
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h2>I'M <strong className="primary-color"> Bharat Makwana</strong></h2>
                <div className='home-section__animated-text'>
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} className='mt-4 mt-md-0'>
              <LazyLoadImage
                src={assets.devLogo}
                alt="developer pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='content-section' id="about">
        <Container>
          <Intro />
        </Container>
      </section>
    </>
  )
}

export default Home;