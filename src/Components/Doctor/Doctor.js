import React from "react";
import "./Doctor.css";

const Doctor = (props) => {
  const {
    doctor_image,
    doctor_name,
    designation,
    visiting_hour,
    address,
    mobile,
  } = props.doctorInfo;

  return (
    
      <div class="row g-0">
        <div class="col-md-2">
          <h1>1</h1>
        </div>
        <div class="col-md-4">
          <img src={doctor_image} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{doctor_name}</h5>
            <p class="card-text">{designation}</p>
            <p class="card-text">
              <small class="text-muted">visiting hour :{visiting_hour}</small>
            </p>
            <p class="card-text">{address}</p>
            <p class="card-text">{mobile}</p>
          </div>
        </div>
      </div>
   
  );
};

export default Doctor;