import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projBlackrock from "../assets/img/proj-blackrock.png";
import projEsg from "../assets/img/proj-esg.png";
import projInfrasphere from "../assets/img/proj-infrasphere.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const allProjects = [
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
    {
      title: "InfraSphere",
      description: "AI infrastructure & power grid convergence analytics",
      imgUrl: projInfrasphere,
      url: "https://infrasphere-one.vercel.app/",
    },
  ];

  const financeProjects = allProjects.filter(p =>
    ["BlackRock Risk Dashboard", "ESG Screener"].includes(p.title)
  );

  const infraProjects = allProjects.filter(p =>
    ["InfraSphere"].includes(p.title)
  );

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
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Finance & Markets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Infrastructure</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {allProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        {financeProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                        {infraProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
