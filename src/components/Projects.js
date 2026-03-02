import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projBlackrock from "../assets/img/proj-blackrock.png";
import projEsg from "../assets/img/proj-esg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BlackRock Risk Dashboard",
      description: "Full-stack financial risk analytics dashboard",
      imgUrl: projBlackrock,
      url: "https://blackrock-risk-dashboard.vercel.app",
    },
    {
      title: "ESG Screener",
      description: "Environmental, Social & Governance stock screening tool",
      imgUrl: projEsg,
      url: "https://esg-screener.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A selection of projects I've built — click any card to view the live site.</p>
                <Row className="justify-content-center" style={{ marginTop: "30px" }}>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
