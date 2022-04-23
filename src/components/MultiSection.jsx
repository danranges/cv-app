import React, { useEffect } from "react";
import { nanoid } from "nanoid";

const MultiSection = ({ handleChange, data, type }) => {
  useEffect(() => {}, []);

  return (
    <div className='flex flex-col min-h-screen pt-20 border-2'>
      <h1 className='my-8'>{}</h1>
      <button>Add</button>
    </div>
  );
};

export default MultiSection;
