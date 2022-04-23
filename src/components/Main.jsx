import React, { useState, useEffect } from "react";
import MultiSection from "./MultiSection";
import PersonalInputs from "./PersonalInputs";

const Main = ({ handleChange, data }) => {
  const [personal, setPersonal] = useState(data.personal);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState("");

  useEffect(() => handleChange(personal, education, experience, skills));

  const handlePersonalChange = (e) => {
    setPersonal((personal) => ({ ...personal, [e.target.name]: e.target.value }));
  };

  const handleEducationChange = (obj) => {};

  const handleExperienceChange = (obj) => {};

  const handleSkillsChange = (e) => {};

  return (
    <div className='flex flex-col box-border min-h-screen text-slate-900 dark:text-slate-50 items-center'>
      <PersonalInputs handleChange={handlePersonalChange} data={data.personal} />
      <MultiSection handleChange={handleEducationChange} data={education} type='education' />
      <MultiSection handleChange={handleExperienceChange} data={experience} type='experience' />
    </div>
  );
};

export default Main;
