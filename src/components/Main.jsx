import React, { useState } from "react";
import MultiSection from "./MultiSection";
import PersonalInputs from "./PersonalInputs";

const Main = ({ handleChange }) => {
  const [personal, setPersonal] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    city: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState("");

  const handlePersonalChange = (e) => {
    setPersonal((personal) => ({ ...personal, [e.target.name]: e.target.value }));
    handleChange(personal, education, experience, skills);
  };

  const handleEducationChange = (obj) => {};

  const handleExperienceChange = (obj) => {};

  const handleSkillsChange = (e) => {};

  return (
    <div className='flex flex-col box-border min-h-screen text-slate-900 dark:text-slate-50 items-center'>
      <PersonalInputs handleChange={handlePersonalChange} personalData={personal} />
      <MultiSection handleChange={handleEducationChange} data={education} type='education' />
      <MultiSection handleChange={handleExperienceChange} data={experience} type='experience' />
    </div>
  );
};

export default Main;
