import React from "react";

const PersonalInputs = ({ handleChange, personalData }) => {
  return (
    <div className='flex flex-col justify-center min-h-screen'>
      <h2>First, tell us a little about yourself</h2>
      <div className='flex flex-col gap-2 my-4'>
        <input
          name='name'
          placeholder='Name'
          type='text'
          value={personalData.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          name='title'
          placeholder='Title'
          type='text'
          value={personalData.title}
          onChange={() => handleChange()}
        />
        <input
          name='email'
          placeholder='E-mail'
          type='email'
          value={personalData.email}
          onChange={() => handleChange()}
        />
        <input
          name='phone'
          placeholder='Phone'
          type='tel'
          value={personalData.phone}
          onChange={() => handleChange()}
        />
        <input
          name='city'
          placeholder='Location'
          type='text'
          value={personalData.city}
          onChange={() => handleChange()}
        />
      </div>
    </div>
  );
};

export default PersonalInputs;
