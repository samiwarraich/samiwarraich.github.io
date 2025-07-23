import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

const FeedbackCard = ({ data }) => {
  return (
    <Card className="card-lift--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info">{data.name}</h5>
            <p className="description mt-3">{data.feedback}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
