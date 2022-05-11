import React from "react";
import { format } from "date-fns";

const EduOutput = ({ school }) => {
  const { schoolName, program, degree, city, start, end } = school;
  return (
    <div className='my-2'>
      <div className='flex justify-between'>
        <div className='font-extrabold'>{schoolName}</div>
        {schoolName ? (
          <p>
            {format(new Date(start), "yyyy")}
            {start && end ? " - " : null}
            {format(new Date(end), "yyyy")}
          </p>
        ) : null}
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='font-semibold'>{degree}</div>
          {degree && program ? <p className='mx-1'>-</p> : null}
          <div>{program}</div>
        </div>
        <div>{city}</div>
      </div>
    </div>
  );
};

export default EduOutput;
