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
    </div>
  );
};

export default Main;
