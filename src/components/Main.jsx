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
    <div className='flex flex-col bg-slate-600 overflow-scroll items-center py-10'>
      <PersonalInputs handleChange={(e) => handlePersonalChange(e)} personalData={personalData} />
      <div>{JSON.stringify(personalData, "", 4)}</div>
    </div>
  );
};

export default Main;
