import React, { useEffect, useState } from "react";
import ConsultantProfile from "../../Components/ConsultantProfile/ConsultantProfile";
import "./AllConsultants.css";

const AllConsultants = () => {
  const [doctorsinfo, setDoctorsinfo] = useState([]);
  useEffect(() => {
    fetch("./doctorsFakeData.json")
      .then((response) => response.json())
      .then((data) => setDoctorsinfo(data));
  });
  return (
    <section>
      <div className="text-center mt-5 mb-4">
        <h1>Our Consultants</h1>
      </div>
      <div className="card mb-3">
        {doctorsinfo.map((data) => (
          <ConsultantProfile
            key={data.key}
            doctorInfo={data}
          ></ConsultantProfile>
        ))}
      </div>
    </section>
  );
};

export default AllConsultants;
