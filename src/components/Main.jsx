import React, { useState, useEffect } from "react";
import MultiSection from "./inputs/MultiSection";
import PersonalInputs from "./inputs/PersonalInputs";
import Skills from "./inputs/Skills";

const Main = ({ handleChange, handleSave, data }) => {
  const [personal, setPersonal] = useState(data.personal);
  const [education, setEducation] = useState(data.education);
  const [experience, setExperience] = useState(data.experience);
  const [skills, setSkills] = useState(data.skills);

  useEffect(() => handleChange(personal, education, experience, skills));

  const handlePersonalChange = (e) => {
    setPersonal((personal) => ({ ...personal, [e.target.name]: e.target.value }));
    handleChange(personal, education, experience, skills);
  };

  const handleEducationChange = (obj) => {
    if (!education.find(({ id }) => id === obj.id)) {
      setEducation(education.concat(obj));
    } else {
      setEducation(
        education.map((prev) => {
          return prev.id === obj.id ? obj : prev;
        }),
      );
    }
    handleChange(personal, education, experience, skills);
  };

  const handleExperienceChange = (obj) => {
    if (!experience.find(({ id }) => id === obj.id)) {
      setExperience(experience.concat(obj));
    } else {
      setExperience(
        experience.map((prev) => {
          return prev.id === obj.id ? obj : prev;
        }),
      );
    }
    handleChange(personal, education, experience, skills);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
    handleChange(personal, education, experience, skills);
  };

  const handleDelete = (obj, section) => {
    if (section === "education") {
      setEducation(education.filter(({ id }) => id !== obj.id));
    }
    if (section === "experience") {
      setExperience(experience.filter(({ id }) => id !== obj.id));
    }
    handleChange(personal, education, experience, skills);
  };

  return (
    <div className='flex flex-col box-border min-h-screen text-slate-900 dark:text-slate-50 items-center'>
      <PersonalInputs handleChange={handlePersonalChange} data={data.personal} />
      <MultiSection
        handleChange={handleEducationChange}
        handleDelete={handleDelete}
        data={education}
        type='education'
      />
      <MultiSection
        handleChange={handleExperienceChange}
        handleDelete={handleDelete}
        data={experience}
        type='experience'
      />
      <Skills handleChange={handleSkillsChange} data={skills} />
      <button
        onClick={handleSave}
        className='mb-20 px-6 py-2 text-slate-900 text-lg md:text-xl lg:text-2xl rounded bg-teal-300 hover:bg-teal-200 active:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300 dark:active:bg-teal-500'>
        Save Changes
      </button>
    </div>
  );
};

export default Main;
