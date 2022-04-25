import React, { useState, useEffect } from "react";
import MultiSection from "./MultiSection";
import PersonalInputs from "./PersonalInputs";

const Main = ({ handleChange, data }) => {
  const [personal, setPersonal] = useState(data.personal);
  const [education, setEducation] = useState(data.education);
  const [experience, setExperience] = useState(data.experience);
  const [skills, setSkills] = useState(data.skills);

  useEffect(() => handleChange(personal, education, experience, skills));

  const handlePersonalChange = (e) => {
    setPersonal((personal) => ({ ...personal, [e.target.name]: e.target.value }));
  };

  const handleEducationChange = (obj) => {
    setEducation();
  };

  const handleExperienceChange = (obj) => {
    setExperience();
  };

  const handleSkillsChange = (e) => {
    setSkills();
  };

  return (
    <div className='flex flex-col box-border min-h-screen text-slate-900 dark:text-slate-50 items-center'>
      <PersonalInputs handleChange={handlePersonalChange} data={data.personal} />
      <MultiSection handleChange={handleEducationChange} data={education} type='education' />
      <MultiSection handleChange={handleExperienceChange} data={experience} type='experience' />
    </div>
  );
};

export default Main;
