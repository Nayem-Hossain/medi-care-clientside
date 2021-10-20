import React from "react";
import { Card, Col, Button } from "react-bootstrap";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Service = (props) => {
  const {key, img, treatment_name, description } = props.info;
  return (
    <Col className="p-5">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{treatment_name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Footer className="bg-white">
            <Link to={`/treatment_details/${treatment_name}/${key}`}>
              <Button className="text-white fw-bold btn-danger px-3 py-1">View Details</Button>
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
