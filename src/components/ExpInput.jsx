import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const ExpInput = ({ pushChange, handleDelete, job }) => {
  const [position, setPosition] = useState(job.position);
  const [company, setCompany] = useState(job.company);
  const [desc, setDesc] = useState(job.desc);
  const [city, setCity] = useState(job.city);
  const [start, setStart] = useState(job.start);
  const [end, setEnd] = useState(job.end);

  useEffect(() => {
    const jobData = {
      id: job.id,
      company: company,
      position: position,
      desc: desc,
      city: city,
      start: new Date(start),
      end: new Date(end),
    };
    pushChange(jobData);
  }, [pushChange, job, company, position, desc, city, start, end]);

  return (
    <div className='flex flex-col my-1 p-2 rounded-md shadow-sm self-center items-center'>
      <div className='flex flex-col mx-0.5'>
        <input
          name='company'
          type='text'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className='border-2 p-1 w-80 rounded-md mb-1'
        />
        <input
          name='position'
          type='text'
          placeholder='Position'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className='border-2 p-1 w-80 rounded-md mb-1'
        />
        <input
          name='city'
          type='text'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='border-2  p-1 w-80 rounded-md mb-1'
        />
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
      </div>
      <textarea
        name='desc'
        type='text'
        placeholder='Description'
        value={desc}
        rows='4'
        onChange={(e) => setDesc(e.target.value)}
        className='border-2 p-1 w-80 rounded-md mb-1'></textarea>
      <button onClick={() => handleDelete(job, "experience")}>
        <FontAwesomeIcon icon={faTrashCan} className='' />
      </button>
    </div>
  );
};

export default ExpInput;
