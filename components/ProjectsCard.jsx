import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, Col, Button } from "reactstrap";
import SafeFade from "./SafeFade";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <SafeFade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <p className="description mt-3 text-justify">{data.desc}</p>
                {data?.links?.map((link, i) => (
                  <Button
                    key={i}
                    className="btn-icon"
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="btn-inner--icon">
                      <Icon icon={link.icon} fontSize={20}></Icon>
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </SafeFade>
    </Col>
  );
};

export default ProjectsCard;
