import {Container, Row, Col} from 'react-bootstrap';
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <footer className="footer text-center text-md-start">
      <Container >
        <Row>
          <Col md="4" lg="5">
            <p>Developed and designed By Bharat Makwana</p>
          </Col>
          <Col md="4" lg="4" className="text-md-center text-lg-start">
            <p>Copyright © {year} Bharat Makwana</p>
          </Col>
          <Col md="4" lg="3" className="text-md-end">
            <SocialMedia/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;