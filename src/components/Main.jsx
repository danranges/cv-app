import React, { useState } from "react";
import PersonalInputs from "./PersonalInputs";

const Main = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    city: "",
  });

  const handlePersonalChange = (e) => {
    setPersonalData((personalData) => ({ ...personalData, [e.target.name]: e.target.value }));
  };

  const handleEducationChange = () => {};

  const handleExperienceChange = () => {};

  const handleSkillsChange = () => {};

  const handleSave = () => {};

  const handleLocalStorage = () => {};

  return (
    <div className='flex flex-col box-border min-h-screen text-slate-900 dark:text-slate-50 overflow-scroll items-center'>
      <PersonalInputs handleChange={handlePersonalChange} personalData={personalData} />
      <div className='min-w-full text-center dark:bg-slate-900'>
        {JSON.stringify(personalData, "", 4)}
      </div>
    </div>
  );
};

export default Main;
