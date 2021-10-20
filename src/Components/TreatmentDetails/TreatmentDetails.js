import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
// import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";

const TreatmentDetails = () => {
  const { id } = useParams();
  const [treatments, setTreatments] = useState([]);
  const [singleTreatment, setSingleTreatment] = useState({});
  useEffect(() => {
    fetch("/medicalServisesFakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setTreatments(data);
        console.log(data, "data1");
      });
  }, []);
  useEffect(() => {
    const found = treatments.find((service) => service.key === parseInt(id));
    setSingleTreatment(found);
    console.log(found, "found1");
  }, [treatments, id]);
  return (
    <Card className="w-50">
      <Card.Img variant="top" src={singleTreatment?.img} />
      <Card.Body>
        <Card.Title>{singleTreatment?.treatment_name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go Back</Button>
      </Card.Body>
    </Card>
  );
};

export default TreatmentDetails;
