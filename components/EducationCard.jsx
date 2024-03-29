import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import Fade from "react-reveal/Fade";

const EducationCard = ({ education }) => {
  return (
    <Fade left duration={2000}>
      <Card className="shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{education.schoolName}</h5>
              <h6>{education.subHeader}</h6>
              <Badge color="info" className="mr-1">
                {education.duration}
              </Badge>
              {education.grade && (
                <Badge color="primary" className="mr-1">
                  {education.grade}
                </Badge>
              )}
              <p className="description mt-3 text-justify">{education.desc}</p>
              <ul className="text-justify">
                {education?.descBullets?.length
                  ? education.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
