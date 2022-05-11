import React from "react";

const Skills = ({ handleChange, data }) => {
  return (
    <div className='flex flex-col min-h-screen pt-20'>
      <textarea
        name='skills'
        type='text'
        placeholder='Other Skills'
        value={data}
        rows='8'
        onChange={handleChange}
        className='border-2 p-1 w-80 rounded-md mb-1'></textarea>
    </div>
  );
};

export default Skills;
