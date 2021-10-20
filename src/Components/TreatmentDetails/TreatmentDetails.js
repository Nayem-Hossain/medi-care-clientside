import React, { useEffect, useState } from "react";
import { Card, Button, Nav, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

const TreatmentDetails = () => {
  const { name, treatmentid } = useParams();
  const [treatments, setTreatments] = useState([]);
  const [singleTreatment, setSingleTreatment] = useState({});
  useEffect(() => {
    fetch("/medicalServisesFakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setTreatments(data);
        console.log(data, "data");
      });
  }, []);
  useEffect(() => {
    const found = treatments.find(
      (service) => service.key === parseInt(treatmentid)
    );
    setSingleTreatment(found);
    console.log(found, "found");
  }, [treatments, treatmentid]);
  return (
    <Container className="justify-content-center">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="bg-dark text-white border-0">
            <Card.Img src={singleTreatment?.img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <h1 className="text-center py-3 fw-bold border-5 border-bottom border-info">
            {name}
          </h1>
          <Nav.Link href="/home#servises" className="text-center">
            <Button className="text-white fw-bold btn-info px-5 py-2">
              Go Back
            </Button>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TreatmentDetails;

{
  /* <div className="row container-fluid">
      <div className="col">
        <Card className="border-0">
          <Card.Img
            variant="top"
            src={singleTreatment?.img}
            className="img-fluid"
          />
          <Card.ImgOverlay className='text-white'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{singleTreatment?.description}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className="col">
        <h1 className="text-center py-3 fw-bold border-5 border-bottom border-info">
          {name}
        </h1>
        <div>
          <Nav.Link  href="/home#servises" className='text-center'>
            <Button className="text-white fw-bold btn-info px-5 py-2">
              Go Back
            </Button>
          </Nav.Link>
        </div>
      </div>
    </div> */
}
