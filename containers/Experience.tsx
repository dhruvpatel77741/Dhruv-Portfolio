import React from 'react';
import { experience } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const total = experience.length;
  const isOdd = total % 2 !== 0;
  const mainCount = isOdd ? total - 1 : total;

  return (
    experience && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Experience</h4>
            </div>
          </div>

          {/* First N (even number of) cards */}
          <Row className="row-grid align-items-start">
            {experience.slice(0, mainCount).map((data, i) => (
              <ExperienceCard key={i} {...data} />
            ))}
          </Row>

          {/* Last card, if odd */}
          {isOdd && (
            <Row className="row-grid align-items-start mt-4 justify-content-center">
              <Col className="d-flex justify-content-center">
                <ExperienceCard {...experience[total - 1]} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    )
  );
};

export default Experience;
