import React, { useEffect } from "react";
import { newJob, newSchool } from "../utils/utils";

const MultiSection = ({ handleChange, data, type }) => {
  const handleAdd = () => {
    const newSection = type === "education" ? newSchool() : newJob();
    handleChange(newSection);
  };

  useEffect(() => {}, []);

  return (
    <div className='flex flex-col min-h-screen pt-20 border-2'>
      <h1 className='my-8'>{}</h1>
      {data.map((obj) => {
        return <p key={obj.id}>{obj.id}</p>;
      })}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default MultiSection;
