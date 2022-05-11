import React, { useEffect } from "react";
import { newJob, newSchool } from "../../utils/utils";
import EduInput from "./EduInput";
import ExpInput from "./ExpInput";

const MultiSection = ({ handleChange, handleDelete, data, type }) => {
  const handleAdd = () => {
    const newSection = type === "education" ? newSchool() : newJob();
    handleChange(newSection);
  };

  useEffect(() => {
    !data.length && handleAdd();
  });

  return (
    <div className='flex flex-col items-center pt-20 px-2 w-full text-center'>
      {type === "education" ? (
        <h1 className='my-8 text-2xl md:text-3xl lg:text-4xl'>
          Next up, where did you go to school?
        </h1>
      ) : (
        <h1 className='my-8 text-2xl md:text-3xl lg:text-4xl'>Where have you worked?</h1>
      )}
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
        : data.map((obj) => {
            return (
              <ExpInput
                pushChange={handleChange}
                handleDelete={handleDelete}
                key={obj.id}
                job={obj}
              />
            );
          })}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default MultiSection;
