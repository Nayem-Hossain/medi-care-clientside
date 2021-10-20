import React, { useEffect, useState } from "react";
import Doctor from "../../Components/Doctor/Doctor";
import "./Alldoctors.css";
const Alldoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctorsFakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        console.log(data, "data");
      });
  }, []);
  return (
    <section>
      <div className="text-center mt-5 mb-4">
        <h1>Our Consultants</h1>
      </div>
      <div class="card mb-3">
        {doctors.map((data) => (
          <Doctor key={data.key} doctorInfo={data}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default Alldoctors;
