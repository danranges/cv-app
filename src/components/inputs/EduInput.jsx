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
      school: schoolName,
      degree: degree,
      program: program,
      city: city,
      start: new Date(start),
      end: new Date(end),
    };
    pushChange(schoolData);
  }, [pushChange, school, schoolName, degree, program, city, start, end]);

  return (
    <div className='flex flex-col my-1 p-2 rounded-md shadow-sm self-center items-center'>
      <div className='flex flex-col mx-0.5'>
        <input
          name='school'
          type='text'
          placeholder='School'
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          className='border-2 p-1 w-80 rounded-md mb-1'></input>
        <input
          name='degree'
          type='text'
          placeholder='Degree'
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className='border-2 p-1 w-80 rounded-md mb-1'></input>
        <input
          name='program'
          type='text'
          placeholder='Program'
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className='border-2  p-1 w-80 rounded-md mb-1'></input>
        <input
          name='city'
          type='text'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='border-2  p-1 w-80 rounded-md mb-1'></input>
        {true && (
          <div className='flex mb-2 justify-between'>
            <input
              name='start'
              type='date'
              className='border-2 rounded-md w-40 p-1'
              value={format(new Date(start), "yyyy-MM-dd")}
              onChange={(e) => setStart(e.target.value)}
            />
            <input
              name='start'
              type='date'
              className='border-2 rounded-md w-40 p-1'
              value={format(new Date(end), "yyyy-MM-dd")}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
        )}
      </div>
      <button onClick={() => handleDelete(school, "education")}>
        <FontAwesomeIcon icon={faTrashCan} className='' />
      </button>
    </div>
  );
};

export default EduInput;
