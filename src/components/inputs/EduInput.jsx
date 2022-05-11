import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const EduInput = ({ pushChange, handleDelete, school }) => {
  const [schoolName, setSchoolName] = useState(school.school);
  const [degree, setDegree] = useState(school.degree);
  const [program, setProgram] = useState(school.program);
  const [city, setCity] = useState(school.city);
  const [start, setStart] = useState(school.start);
  const [end, setEnd] = useState(school.end);

  useEffect(() => {
    const schoolData = {
      id: school.id,
      schoolName: schoolName,
      degree: degree,
      program: program,
      city: city,
      start: new Date(start),
      end: new Date(end),
    };
    pushChange(schoolData);
  }, [pushChange, school, schoolName, degree, program, city, start, end]);

  return (
    <div className='flex flex-col w-3/4 max-w-lg my-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-md shadow-md dark:shadow-none self-center items-center'>
      <div className='flex flex-col w-full gap-2 mt-4 md:text-lg lg:text-xl'>
        <input
          name='school'
          type='text'
          placeholder='School'
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          className='px-2 py-1 rounded text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='degree'
          type='text'
          placeholder='Degree'
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className='px-2 py-1 rounded text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='program'
          type='text'
          placeholder='Program'
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className='px-2 py-1 rounded text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='city'
          type='text'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='px-2 py-1 rounded text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <div className='flex mb-2 gap-2 justify-center'>
          <input
            name='start'
            type='date'
            className='px-2 py-1 rounded text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
            value={format(new Date(start), "yyyy-MM-dd")}
            onChange={(e) => setStart(e.target.value)}
          />
          <input
            name='start'
            type='date'
            className='px-2 py-1 rounded text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
            value={format(new Date(end), "yyyy-MM-dd")}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
      </div>
      <button onClick={() => handleDelete(school, "education")}>
        <FontAwesomeIcon icon={faTrashCan} className='' />
      </button>
    </div>
  );
};

export default EduInput;
