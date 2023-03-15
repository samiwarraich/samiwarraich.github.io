import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                {data.github ? (
                  <Button
                    className="btn-icon"
                    href={data.github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <Icon icon="mdi:github" fontSize={20}></Icon>
                    </span>
                  </Button>
                ) : null}
                {data.web ? (
                  <Button
                    className="btn-icon"
                    href={data.web}
                    target="_blank"
                    rel="noopener"
                    aria-label="Web"
                  >
                    <span className="btn-inner--icon">
                      <Icon icon="mdi:internet" fontSize={20}></Icon>
                    </span>
                  </Button>
                ) : null}
                {data.android ? (
                  <Button
                    className="btn-icon"
                    href={data.android}
                    target="_blank"
                    rel="noopener"
                    aria-label="Android"
                  >
                    <span className="btn-inner--icon">
                      <Icon icon="bxl:play-store" fontSize={20}></Icon>
                    </span>
                  </Button>
                ) : null}
                {data.ios ? (
                  <Button
                    className="btn-icon"
                    href={data.ios}
                    target="_blank"
                    rel="noopener"
                    aria-label="IOS"
                  >
                    <span className="btn-inner--icon">
                      <Icon icon="basil:app-store-solid" fontSize={20}></Icon>
                    </span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
