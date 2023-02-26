import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {

  const projects = [
    {
      title: "Human Touch Project",
      description: "Ongoing at Salk Institute, advised by Sergei Gepshtein and Eric Mooshagian",
      imgUrl: projImg1,
    },
    {
      title: "Dota2 Pro Circuit Data Analysis",
      description: "Ongoing seasonal data analysis for Dota2 Pro Circuit Tournament",
      imgUrl: projImg2,
    },
    {
      title: "COGS108 Final Project",
      description: "explore if there is a relationship between cases and crypto prices and find a correlation / explore stock market data using NASDAQ databases and see if there was any correlation between COVID-19 cases and stock market prices",
      imgUrl: projImg3,
    }
  ];
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2> Projects </h2>
            <p> Click tabs to check out the projects I made: </p>
            <Tab.Container id="projects-tabs" defaultActivekey="first">
              <Nav variants="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Software </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Data Analysis </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Other </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
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
                <Tab.Pane eventKey="second">
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
                <Tab.Pane eventKey="third">
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
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
    </section>
  )
}