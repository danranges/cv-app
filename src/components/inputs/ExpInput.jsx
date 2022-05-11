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
    <div className='flex flex-col w-3/4 max-w-lg my-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-md shadow-md dark:shadow-none self-center items-center'>
      <div className='flex flex-col w-full gap-2 mt-4 md:text-lg lg:text-xl'>
        <input
          name='company'
          type='text'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className='px-2 py-1 rounded text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='position'
          type='text'
          placeholder='Position'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
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
      <textarea
        name='desc'
        type='text'
        placeholder='Description'
        value={desc}
        rows='4'
        onChange={(e) => setDesc(e.target.value)}
        className='px-2 py-1 rounded w-full text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'></textarea>
      <button onClick={() => handleDelete(job, "experience")}>
        <FontAwesomeIcon icon={faTrashCan} className='mt-2' />
      </button>
    </div>
  );
};

export default ExpInput;
