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
      <button
        onClick={handleAdd}
        className='mt-6 mb-20 px-6 py-2 text-slate-900 text-lg md:text-xl lg:text-2xl rounded bg-slate-200 hover:bg-slate-400 active:bg-slate-300 shadow-sm'>
        {type === "education" ? "Add School" : "Add Job"}
      </button>
    </div>
  );
};

export default MultiSection;
