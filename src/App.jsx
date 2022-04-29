import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import { emptyCV, savedCV } from "./utils/utils";

const App = () => {
  const [resumeData, setResumeData] = useState(!!savedCV ? savedCV : emptyCV);

  useEffect(() => {}, []);

  const handleChange = (personal, education, experience, skills) => {
    setResumeData({
      personal: personal,
      education: education,
      experience: experience,
      skills: skills,
    });
  };

  const handleSave = () => {
    localStorage.setItem("cvData", JSON.stringify(resumeData));
  };

  return (
    <div className='App h-screen overflow-scroll bg-slate-100 dark:bg-slate-900'>
      <Header handleSave={handleSave} />
      <Main handleChange={handleChange} data={resumeData} />
      <div className='text-slate-900 dark:text-slate-50'>{JSON.stringify(resumeData, "", 2)}</div>
    </div>
  );
};

export default App;
