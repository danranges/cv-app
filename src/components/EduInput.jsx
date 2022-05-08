import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-date-picker";

const EduInput = ({ pushChange, handleDelete, school }) => {
  const [schoolData, setSchoolData] = useState(school);

  const handleChange = (e) => {
    setSchoolData({
      ...schoolData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (type, newDate) => {
    setSchoolData({
      ...schoolData,
      [type]: newDate,
    });
  };

  useEffect(() => pushChange(schoolData), [pushChange, schoolData]);

  return (
    <div className='flex flex-col my-1 p-2 bg-indigo-50 dark:bg-indigo-400 rounded-md shadow-sm self-center items-center'>
      <div className='flex flex-col mx-0.5'>
        <input
          name='school'
          type='text'
          placeholder='School'
          value={schoolData.school}
          onChange={handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
        <input
          name='degree'
          type='text'
          placeholder='Degree'
          value={schoolData.degree}
          onChange={handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
        <input
          name='program'
          type='text'
          placeholder='Program'
          value={schoolData.program}
          onChange={handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
        <input
          name='city'
          type='text'
          placeholder='City'
          value={schoolData.city}
          onChange={handleChange}
          className='border-2 border-indigo-200 p-1 w-80 rounded-md mb-1'></input>
        {true && (
          <div className='flex mb-2'>
            <DatePicker
              name='start'
              value={new Date(schoolData.start)}
              onChange={(value) => handleDateChange("start", value)}
              className='border-2 border-indigo-200 p-1 w-40 rounded-md placeholder:text-gray-400'></DatePicker>
            <DatePicker
              name='end'
              value={schoolData.end}
              onChange={(value) => handleDateChange("end", value)}
              className='border-2 border-indigo-200 p-1 w-40 rounded-md'></DatePicker>
          </div>
        )}
      </div>
      <button onClick={() => handleDelete(school, "education")}>
        <FontAwesomeIcon icon={faTrashCan} className='text-indigo-900' />
      </button>
    </div>
  );
};

export default EduInput;
