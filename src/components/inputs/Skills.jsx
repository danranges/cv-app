import React from "react";

const Skills = ({ handleChange, data }) => {
  return (
    <div className='flex flex-col w-3/4 max-w-lg pt-10 pb-20 text-center'>
      <h1 className='my-8 text-2xl md:text-3xl lg:text-4xl'>
        Finally, what additional skills would you like to highlight?
      </h1>
      <div className='p-2 bg-slate-100 dark:bg-slate-800 rounded-md shadow-md dark:shadow-none'>
        <textarea
          name='skills'
          type='text'
          placeholder='Other Skills'
          value={data}
          rows='8'
          onChange={handleChange}
          className='mt-1 px-2 rounded w-full h-full text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'></textarea>
      </div>
    </div>
  );
};

export default Skills;
