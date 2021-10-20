import React from "react";
import { Link } from "react-router-dom";
import "./ConsultantProfile.css";

const ConsultantProfile = (props) => {
  const {
    key,
    doctor_image,
    doctor_name,
    designation,
    visiting_hour,
    address,
    mobile,
  } = props.doctorInfo;
  return (
    <div className="row g-0 d-flex justify-content-start align-items-center">
      <div className="col-md-2 d-grid justify-content-center align-items-center">
        <h1 className="list fw-bold">{key}</h1>
      </div>
      <div className="col-md-3">
        <img
          src={doctor_image}
          className="img-fluid rounded-circle w-50 "
          alt="..."
        />
      </div>
      <div className="col-md-5">
        <div className="card-body">
          <h5 className="card-title">{doctor_name}</h5>
          <p className="card-text">{designation}</p>
          <p className="card-text">
            <small className="text-muted">
              visiting hour : {visiting_hour}
            </small>
          </p>
          <p className="card-text">{address}</p>
          <p className="card-text">{mobile}</p>
        </div>
      </div>
      <div className="col-md-2 d-grid justify-content-start align-items-center">
        <Link to="/appointment">
          <button className="btn btn-info text-white fw-bold">
            Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConsultantProfile;
