import React, { useState } from "react";
import MultiSection from "./MultiSection";
import PersonalInputs from "./PersonalInputs";

const Main = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    city: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handlePersonalChange = (e) => {
    setPersonalData((personalData) => ({ ...personalData, [e.target.name]: e.target.value }));
  };

  const handleEducationChange = (obj) => {};

  const handleExperienceChange = (obj) => {};

  const handleSkillsChange = (e) => {};

  const handleSave = () => {};

  const handleLocalStorage = () => {};

  return (
    <div className='flex flex-col box-border min-h-screen text-slate-900 dark:text-slate-50 items-center'>
      <PersonalInputs handleChange={handlePersonalChange} personalData={personalData} />
      <MultiSection handleChange={handleEducationChange} data={education} type='education' />
      <MultiSection handleChange={handleExperienceChange} data={experience} type='experience' />
      <div className='min-w-full text-center dark:bg-slate-900 '>
        {JSON.stringify(personalData, "", 4)}
      </div>
    </div>
  );
};

export default Main;
