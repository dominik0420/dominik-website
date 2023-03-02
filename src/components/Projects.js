import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import sProjImg1 from "../assets/img/softwareProject-img1.png"
import oProjImg1 from "../assets/img/oProj-img1.jpg"

export const Projects = () => {

  const dataProjects = [
    {
      title: "Human Touch Project",
      description: "Ongoing at Salk Institute, advised by Sergei Gepshtein and Eric Mooshagian",
      imgUrl: projImg1,
    },
    {
      title: "Dota2 Pro Circuit Data Analysis",
      description: "Ongoing seasonal data analysis for Dota2 Pro Circuit Tournament",
      imgUrl: projImg2,
      url: 'https://github.com/dominik0420/dota2_dpc_data_analysis'
    },
    {
      title: "COGS108 Final Project",
      description: "explore if there is a relationship between cases and crypto prices and find a correlation / explore stock market data using NASDAQ databases and see if there was any correlation between COVID-19 cases and stock market prices",
      imgUrl: projImg3,
      url: 'https://github.com/dominik0420/COGS108_FinalProject'
    }
  ];

  const softwareProjects = [
    {
      title: "Personal Portfolio Website",
      description: "It's this website! :)",
      imgUrl: sProjImg1,
      url: 'https://github.com/dominik0420/dominik-website'
    }
  ];

  const otherProjects = [
    {
      title: "Oops! ",
      description: "Nothing here yet, apparently. Zehong / Dominik / ONIROZ Li will come back with more stuff in a bit :)",
      imgUrl: oProjImg1,
      url: 'https://google.com'
    }
  ];
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2> Projects </h2>
            <p> Click tabs and hover to check out the projects I made: </p>
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
                      softwareProjects.map((project, index) => {
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
                      dataProjects.map((project, index) => {
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
                      otherProjects.map((project, index) => {
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