import React, { useState, useEffect } from "react";

const EduInput = ({ pushChange, handleDelete, school }) => {
  const [schoolData, setSchoolData] = useState(school);

  const handleChange = (e) => {
    setSchoolData({
      ...schoolData,
      [e.target.name]: e.target.value,
    });
  };

  return <h1 onClick={() => handleDelete(school, "education")}>{schoolData.id}</h1>;
};

export default EduInput;
