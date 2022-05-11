import React from "react";

const PersonalOutput = ({ personal }) => {
  const { name, title, city, email, phone } = personal;
  return (
    <div className='flex justify-between my-2 pb-2 border-b-2'>
      <div className='flex flex-col justify-between'>
        <h1 className='font-bold text-5xl'>{name}</h1>
        <p>{title}</p>
      </div>
      <div className='flex flex-col justify-between'>
        <p>{city}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default PersonalOutput;
