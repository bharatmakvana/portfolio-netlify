import { Row, Col} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {assets} from '../assets/assets';
import SocialMedia from '../Components/SocialMedia';
const Intro = () => {
  return (
    <>
      <Row className='align-items-md-center'>
        <Col md={8}>
          <h2>Get to Know Me</h2>
          <p>Hi there! I'm a passionate web development professional with over 9 years of hands-on experience. I stay current with the latest technologies and trends to build smart, high-performance solutions.</p>
          <p>My goal is to deliver work that not only meets deadlines but also adds real value to every project I take on.</p>
          <p>I'm a quick learner and always eager to take on new challenges.</p>
        </Col>
        <Col md={4} className='text-center text-md-end'>
          <LazyLoadImage src={assets.developerFace} alt="developer pic" className="img-fluid rounded-circle" style={{ maxHeight: "300px" }} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="home-about-social">
            <h3>FIND ME ON</h3>
            <p>Feel free to <span className="primary-color">connect</span> with me</p>
            <div className="home-social-links">
              <SocialMedia/>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Intro;