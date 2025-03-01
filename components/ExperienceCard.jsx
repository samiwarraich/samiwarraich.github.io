import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="px-5">
            <img
              src={data.companylogo}
              style={{
                objectFit: "cover",
                left: 0,
                right: 0,
                top: "7rem",
                marginLeft: "auto",
                marginRight: "auto",
                width: "8rem",
                height: "8rem",
                borderRadius: "50%",
              }}
              className="shadow mb-3"
              alt={data.companylogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {data.company}
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              {data.role}
            </CardSubtitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <p tag="div" className="description my-3 text-justify">
              {data.desc}
            </p>
            <ul>
              {data?.descBullets?.length
                ? data.descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
