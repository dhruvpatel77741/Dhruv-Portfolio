import React from 'react';
import { projects } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  const total = projects.length;
  const isOdd = total % 2 !== 0;
  const mainCount = isOdd ? total - 1 : total;

  return (
    projects && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Projects</h4>
            </div>
          </div>

          {/* First N (even number of) cards */}
          <Row className="row-grid align-items-center">
            {projects.slice(0, mainCount).map((data, i) => (
              <ProjectsCard key={i} {...data} />
            ))}
          </Row>

          {/* Last card, if odd */}
          {isOdd && (
            <Row className="row-grid align-items-center mt-4 justify-content-center">
              <Col className="d-flex justify-content-center">
                <ProjectsCard {...projects[total - 1]} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    )
  );
};

export default Projects;
