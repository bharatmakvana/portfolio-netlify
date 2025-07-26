import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {assets} from '../assets/assets';

const About = () => {

  const techStack = [
    {
      id: 1,
      name: 'HTML',
      icon: `${assets.htmlLogo}`
    },
    {
      id: 2,
      name: 'CSS',
      icon: `${assets.cssLogo}`
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: `${assets.jsLogo}`
    },
    {
      id: 4,
      name: 'Sass',
      icon: `${assets.sassLogo}`
    },
    {
      id: 4,
      name: 'React',
      icon: `${assets.reactLogo}`
    },
    {
      id: 5,
      name: 'Node.js',
      icon: `${assets.nodejsLogo}`
    },
    {
      id: 6,
      name: 'Git',
      icon: `${assets.gitLogo}`
    },
  ]

  const tools = [
    {
      id: 1,
      name: 'Mac Os',
      icon: `${assets.macOsLogo}`
    },
    {
      id: 2,
      name: 'Cursor',
      icon: `${assets.cursorLogo}`
    },
    {
      id: 3,
      name: 'VS Code',
      icon: `${assets.vsCodeLogo}`
    },
  ]

  return (
    <section className='content-section'>
      <Container>
        <Row>
          <Col md={7} className='about-header'>
            <h1>About Me</h1>
            <p>Hi I'm <strong>Bharat Makvana</strong> — a passionate and experienced web developer with over 9 years in the industry. I specialize in building clean, high-performance websites and web applications that are fast, responsive, and user-friendly.</p>
            <p>Throughout my career, I've worked with a wide range of modern technologies and frameworks. I make it a priority to stay updated with the latest trends in web development so I can deliver smart, scalable solutions tailored to each project's unique goals. Whether it's creating pixel-perfect frontends or optimizing complex web applications, I approach every challenge with dedication and attention to detail.</p>
            <p>What truly drives me is the opportunity to solve problems through code. I enjoy turning ideas into reality and ensuring that every project not only meets expectations but exceeds them. I’m committed to writing clean, maintainable code and following best practices to ensure long-term success.</p>
            <p>Over the years, I’ve had the privilege to collaborate with diverse teams and clients across different industries. These experiences have helped me grow not just technically, but also as a team player and communicator — qualities that are just as important as technical skills in today’s collaborative development environment.</p>
            <p>When I'm not coding, I love exploring new tools, contributing to open-source projects. I'm always open to exciting new opportunities, whether it's working on a project, contributing to a team, or building something meaningful from scratch.</p>
            <p>Thanks for stopping by — feel free to check out my <Link to="/project" className='primary-color'>Projects</Link> or <Link to="/contact" className='primary-color'>Get in touch.</Link></p>
          </Col>
        </Row>

        <h2 className='tech-stack-heading text-center mt-5 mb-4'>Professional <span className='primary-color'>Tech Stack</span></h2>
        <Row className='mb-5'>
          {techStack.map((tech) => (
            <Col key={tech.id} md={2} className='tech-icons col-md-2 col-4'>
              <LazyLoadImage src={`${tech.icon}`} alt={tech.name} />
            </Col>
          ))}
        </Row>

        <h3 className='h2 tech-stack-heading text-center mt-5 mb-4'><span className='primary-color'>Tools</span> I use </h3>
        <Row className='mb-5'>
          {tools.map((tool) => (
            <Col key={tool.id} md={2} className='tech-icons col-md-2 col-4'>
              <LazyLoadImage src={`${tool.icon}`} alt={tool.name}  title={tool.name}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default About;