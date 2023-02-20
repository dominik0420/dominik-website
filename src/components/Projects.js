import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    }
  ];
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2> Projects </h2>
            <p> Lorem </p>
            <Tab.Container id="projects-tabs" defaultActivekey="first">
              <Nav variants="pills" defaultActivekey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Tab One </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Tab Two </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Tab Three </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane evenKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <p> {project.title} </p>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane evenKey="second">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard 
                            key = {index} 
                            {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane evenKey="third">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <p> {project.title} </p>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
    </section>
  )
}