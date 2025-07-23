import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import SafeFade from "../components/SafeFade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg">
        <h2 className="h1">{skillsSection.title}</h2>
        <p className="lead">{skillsSection.subTitle}</p>
        {skillsSection.data.map((section, index) => {
          return (
            <Row className="my-5" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <SafeFade left duration={2000}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </SafeFade>
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <SafeFade right duration={2000}>
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.id.replace(/\s/g, "")}
                          >
                            <Icon
                              icon={skill.className}
                              data-inline="false"
                            ></Icon>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.id.replace(/\s/g, "")}
                          >
                            {skill.name}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </SafeFade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Skills;
