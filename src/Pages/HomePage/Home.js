import React, { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import Service from "../../Components/Service/Service";
import banner1 from "../../Images/Banner/banner-1.jpg";
import banner2 from "../../Images/Banner/banner-2.jpg";
import banner3 from "../../Images/Banner/banner-3.jpg";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./medicalServisesFakeData.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  });

  return (
    <div className="pt-1">
      {/* banner section */}
      <section>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 img-fluid"
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-content">
              <h1 className="fw-bold text-info heading">
                Dental & Medical Care
              </h1>

              <p className="text-dark">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={banner2}
              alt="Second slide"
            />

            <Carousel.Caption className="text-dark">
              <h1 className="fw-bold">Give an Appoinment</h1>
              <p>Our Purpose is Your Recovery</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={banner3}
              alt="Third slide"
            />

            <Carousel.Caption className="text-dark">
              <h1 className="fw-bold">Medical innovation</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* servises section */}
      <section className="m-5">
        <div className="text-center mt-5 mb-4">
          <h1 id="servises">Our Treatment Services</h1>
        </div>
        <Row xs={1} sm={2} md={3} className="g-4">
          {services.map((data) => (
            <Service key={data.key} info={data}></Service>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Home;
