
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SBI.png";
import projImg2 from "../assets/img/dashboard.jpeg";
import projImg3 from "../assets/img/RESTAPI.png";
import projImg4 from "../assets/img/User_dashoard.png";
import projImg5 from "../assets/img/Freelance.png";
import projImg6 from "../assets/img/FoodMunch.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Vendor Payment System",
      description: "Financial Application",
      imgUrl: projImg1,
    },
    {
      title: "Jutstification Report",
      description: "Dashboard",
      imgUrl: projImg2,
    },
    {
      title: "GST TAX Block/Un Block Vendor payment API's",
      description: "Rest API's",
      imgUrl: projImg3,
    },
  ];


  const personalprojects = [
    {
      title: "User Analysis",
      description: "Dash board",
      imgUrl: projImg4,
    },
    {
      title: "KNR Freelance",
      description: "Web application",
      imgUrl: projImg5,
    },
    {
      title: "Food Munch",
      description: "Restaurent Web application",
      imgUrl: projImg6,
    },
    
  ];

  return (
    <section className="project" id="projects">
     
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>SBI bank uses the VPS application to pay vendors and service providers.
                   The application and support include GST regulations, tax computations and validations, and end-to-end payment processing to all SBI service providers.
                   The application has multiple ways to collect data, including bulk upload using standard file formats, SFTP, and single manual entry.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          personalprojects.map((personalprojects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...personalprojects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>We'll seamlessly integrate new client requirements into our project plan. 
                      Communication with the client to add or update requirements and fix problems with production. 
                      Monitoring the creation of reports for a predetermined amount of time. 
                      Proficient in meticulously analyzing new requirements and swiftly implementing necessary adjustments to project scopes. 
                      Adept at maintaining open channels of communication with clients, 
                      Ensuring transparency and alignment throughout project cycles.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
