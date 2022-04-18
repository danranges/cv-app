import React from "react";

const PersonalInputs = ({ handleChange, personalData }) => {
  return (
    <div className='flex flex-col min-h-screen pt-20'>
      <h2 className='my-8 text-2xl md:text-3xl lg:text-4xl'>
        First, tell us a little about yourself
      </h2>
      <div className='flex flex-col gap-2 mt-4 md:text-lg lg:text-xl'>
        <input
          name='name'
          placeholder='Name'
          type='text'
          value={personalData.name}
          onChange={handleChange}
          className='px-2 py-1 rounded text-slate-900 light:shadow-sm dark:bg-slate-700 dark:text-slate-50 placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='title'
          placeholder='Title'
          type='text'
          value={personalData.title}
          onChange={handleChange}
          className='px-2 py-1 rounded text-slate-900 light:shadow-sm dark:bg-slate-700 dark:text-slate- placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='email'
          placeholder='E-mail'
          type='email'
          value={personalData.email}
          onChange={handleChange}
          className='px-2 py-1 rounded text-slate-900 light:shadow-sm dark:bg-slate-700 dark:text-slate- placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='phone'
          placeholder='Phone'
          type='tel'
          value={personalData.phone}
          onChange={handleChange}
          className='px-2 py-1 rounded text-slate-900 light:shadow-sm dark:bg-slate-700 dark:text-slate- placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
        <input
          name='city'
          placeholder='Location'
          type='text'
          value={personalData.city}
          onChange={handleChange}
          className='px-2 py-1 rounded text-slate-900 light:shadow-sm dark:bg-slate-700 dark:text-slate- placeholder:text-slate-500 dark:placeholder:text-slate-400'
        />
      </div>
    </div>
  );
};

export default PersonalInputs;
