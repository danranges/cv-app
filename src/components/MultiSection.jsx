import React, { useEffect } from "react";
import { newJob, newSchool } from "../utils/utils";
import EduInput from "./EduInput";

const MultiSection = ({ handleChange, handleDelete, data, type }) => {
  const handleAdd = () => {
    const newSection = type === "education" ? newSchool() : newJob();
    handleChange(newSection);
  };

  useEffect(() => {
    !data.length && handleAdd();
  });

  return (
    <div className='flex flex-col min-h-screen pt-20 border-2'>
      {type === "education"
        ? data.map((obj) => {
            return (
              <EduInput
                pushChange={handleChange}
                handleDelete={handleDelete}
                key={obj.id}
                school={obj}
              />
            );
          })
        : null}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default MultiSection;
