import React from "react";
import { format } from "date-fns";

const ExpOutput = ({ job }) => {
  const { company, position, desc, city, start, end } = job;
  return (
    <div className='my-2'>
      <div className='flex justify-between'>
        <div className='font-bold'>{company}</div>
        {company ? (
          <p>
            {format(new Date(start), "yyyy")}
            {start && end ? " - " : null}
            {format(new Date(end), "yyyy")}
          </p>
        ) : null}
      </div>
      <div className='flex justify-between'>
        <div className='font-medium'>{position}</div>
        <div>{city}</div>
      </div>
      <div className='mt-0.5 text-sm'>{desc}</div>
    </div>
  );
};

export default ExpOutput;
